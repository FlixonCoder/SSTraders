"use client";

import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react";
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

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

function getInitialItems(): EnquiryItem[] {
  if (typeof window === "undefined") return [];
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
  return [];
}

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<EnquiryItem[]>(getInitialItems);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore quota or storage errors
    }
  }, [items]);

  const addItem = useCallback((item: Omit<EnquiryItem, "quantity"> & { quantity?: string }) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.slug === item.slug);
      if (exists) {
        return prev;
      }
      return [...prev, { ...item, quantity: item.quantity || "1" }];
    });
  }, []);

  const removeItem = useCallback((slug: string) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  }, []);

  const updateItem = useCallback((slug: string, updates: Partial<EnquiryItem>) => {
    setItems((prev) =>
      prev.map((i) => (i.slug === slug ? { ...i, ...updates } : i))
    );
  }, []);

  const clear = useCallback(() => {
    setItems([]);
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
