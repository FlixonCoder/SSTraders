"use client";

import React, { useSyncExternalStore } from "react";
import { getOpenStatus, type OpenStatus as StatusType } from "@/lib/hours";

interface OpenStatusProps {
  className?: string;
  showDot?: boolean;
}

let cachedStatus: StatusType | null = null;
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  const interval = setInterval(() => {
    cachedStatus = getOpenStatus();
    listeners.forEach((l) => l());
  }, 60000);

  return () => {
    listeners.delete(callback);
    clearInterval(interval);
  };
}

function getSnapshot(): StatusType {
  if (!cachedStatus) {
    cachedStatus = getOpenStatus();
  }
  return cachedStatus;
}

function getServerSnapshot(): StatusType | null {
  return null;
}

export function OpenStatus({ className = "", showDot = true }: OpenStatusProps) {
  const status = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!status) {
    return (
      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 ${className}`}>
        <span className="size-2 rounded-full bg-zinc-300" />
        Trading hours
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
        status.open ? "text-whatsapp font-bold" : "text-zinc-600"
      } ${className}`}
    >
      {showDot && (
        <span
          className={`size-2 rounded-full ${
            status.open ? "bg-whatsapp ring-2 ring-whatsapp/30" : "bg-zinc-400"
          }`}
        />
      )}
      <span>{status.label}</span>
    </span>
  );
}
