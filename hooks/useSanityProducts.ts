// hooks/useSanityProducts.ts

import { useEffect, useState } from "react"
import { client } from "../lib/sanity"
import {
  SanityProduct,
  SanityCategory,
  ProductsHookResult,
} from "@/types/sanity"

// Fisher-Yates shuffle for variety in the grid
const shuffleArray = (array: SanityProduct[]): SanityProduct[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const envReady =
  !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  !!process.env.NEXT_PUBLIC_SANITY_DATASET

export const useSanityProducts = (
  selectedCategorySlug: string | null
): ProductsHookResult => {
  const [products, setProducts] = useState<SanityProduct[]>([])
  const [categories, setCategories] = useState<SanityCategory[]>([])
  const [loading, setLoading] = useState<boolean>(envReady)
  const [error, setError] = useState<string | null>(null)

  // Fetch Categories
  useEffect(() => {
    if (!envReady) {
      setLoading(false)
      setError("Sanity environment variables are missing.")
      return
    }

    const fetchCategories = async () => {
      const query = `*[_type == "category"]{ title, "slug": slug.current }`
      try {
        const data = await client.fetch<SanityCategory[]>(query)
        setCategories(data)
      } catch (err) {
        console.error("Error fetching categories:", err)
        setError("Failed to load categories.")
      }
    }

    fetchCategories()
  }, [])

  // Fetch Products
  useEffect(() => {
    if (!envReady) return

    const fetchProducts = async () => {
      setLoading(true)
      setError(null)

      const query = `
        *[_type == "product" ${selectedCategorySlug ? `&& category->slug.current == $categorySlug` : ""
        }] | order(_createdAt desc) {
          _id,
          name,
          "id": _id,
          "slug": slug.current,
          "categoryTitle": category->title,
          "categorySlug": category->slug.current,
          mainImage{
            asset,
            alt
          },
          price,
          description
        }
      `

      try {
        const params = selectedCategorySlug ? { categorySlug: selectedCategorySlug } : {}
        const data = await client.fetch<SanityProduct[]>(query, params)
        setProducts(shuffleArray(data))
      } catch (err) {
        console.error("Error fetching products:", err)
        setError("Failed to load products.")
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [selectedCategorySlug])

  return { products, categories, loading, error }
}