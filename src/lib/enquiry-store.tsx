"use client";

import React, { createContext, useContext, useMemo, useCallback, useSyncExternalStore } from "react";
import type { EnquiryItem } from "@/lib/whatsapp";

interface EnquiryContextValue {
  items: EnquiryItem[];
  addItem: (item: Omit<EnquiryItem, "quantity"> & { quantity?: string }) => void;
  removeItem: (slug: string) => void;
  updateItem: (slug: string, updates: Partial<EnquiryItem>) => void;
  clear: () => void;
  count: number;
  isInEnquiry: (slug: string) => boolean;
}

const STORAGE_KEY = "ss_agencies_enquiry_v1";
const SERVER_SNAPSHOT: EnquiryItem[] = [];

let cachedItems: EnquiryItem[] | null = null;
const listeners = new Set<() => void>();

function readFromStorage(): EnquiryItem[] {
  if (typeof window === "undefined") return SERVER_SNAPSHOT;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch {
    // localStorage disabled or private browsing
  }
  return SERVER_SNAPSHOT;
}

function getSnapshot(): EnquiryItem[] {
  if (cachedItems === null) {
    cachedItems = readFromStorage();
  }
  return cachedItems;
}

function getServerSnapshot(): EnquiryItem[] {
  return SERVER_SNAPSHOT;
}

function setStoreItems(next: EnquiryItem[]) {
  cachedItems = next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Ignore quota or storage errors
  }
  listeners.forEach((l) => l());
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  const handleStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      cachedItems = readFromStorage();
      listeners.forEach((l) => l());
    }
  };
  window.addEventListener("storage", handleStorage);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", handleStorage);
  };
}

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const addItem = useCallback((item: Omit<EnquiryItem, "quantity"> & { quantity?: string }) => {
    const prev = getSnapshot();
    const exists = prev.find((i) => i.slug === item.slug);
    if (exists) return;
    setStoreItems([...prev, { ...item, quantity: item.quantity || "1" }]);
  }, []);

  const removeItem = useCallback((slug: string) => {
    const prev = getSnapshot();
    setStoreItems(prev.filter((i) => i.slug !== slug));
  }, []);

  const updateItem = useCallback((slug: string, updates: Partial<EnquiryItem>) => {
    const prev = getSnapshot();
    setStoreItems(prev.map((i) => (i.slug === slug ? { ...i, ...updates } : i)));
  }, []);

  const clear = useCallback(() => {
    setStoreItems([]);
  }, []);

  const isInEnquiry = useCallback((slug: string) => items.some((i) => i.slug === slug), [items]);

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      updateItem,
      clear,
      count: items.length,
      isInEnquiry,
    }),
    [items, addItem, removeItem, updateItem, clear, isInEnquiry]
  );

  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>;
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) {
    throw new Error("useEnquiry must be used within an EnquiryProvider");
  }
  return ctx;
}
