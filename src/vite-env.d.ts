/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ORIGIN?: string
  /** Google Business Profile Place ID — unlocks the public “Write a review” link. */
  readonly VITE_GOOGLE_PLACE_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
