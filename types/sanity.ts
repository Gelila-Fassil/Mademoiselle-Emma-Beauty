// types/sanity.ts

// Basic Sanity image type with optional alt text
export interface SanityImage {
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
  }
  alt?: string
}

// Category document
export interface SanityCategory {
  title: string
  slug: string // slug.current
}

// Product document (aligned to provided schema)
export interface SanityProduct {
  _id: string
  id: string // duplicated from _id for UI convenience
  name: string
  slug: string // slug.current
  categoryTitle: string
  categorySlug: string
  mainImage: SanityImage
  price?: number
  description?: any[]
}

export interface ProductsHookResult {
  products: SanityProduct[]
  categories: SanityCategory[]
  loading: boolean
  error: string | null
}

// CEO profile document
export interface CEOProfile {
  name: string
  title: string
  photo: SanityImage
  highlightQuote?: string
  intro?: string
  body?: string
}