/// <reference types="vite/client" />

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export {};
