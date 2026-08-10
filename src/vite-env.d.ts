/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEMO_BOOKING_API_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
