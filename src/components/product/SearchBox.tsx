"use client";

import React from "react";
import { Search, X } from "lucide-react";

interface SearchBoxProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

export function SearchBox({ value, onChange, placeholder = "Search sheets, pipes, panels..." }: SearchBoxProps) {
  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-zinc-500">
        <Search size={18} aria-hidden="true" />
      </div>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full min-h-12 rounded-xl border border-ink/15 bg-white pl-10 pr-10 text-sm font-medium text-ink placeholder-zinc-500 transition-colors focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal [&::-webkit-search-cancel-button]:hidden"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search query"
          className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-zinc-500 hover:text-ink"
        >
          <X size={16} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
