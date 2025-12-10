// // hooks/useSanityProducts.ts

// import { useState, useEffect } from 'react';
// import { client } from '../lib/sanity'; // Correct relative path
// import { SanityProduct, SanityCategory, ProductsHookResult } from '@/types/sanity';

// // A function to shuffle the array
// const shuffleArray = (array: SanityProduct[]): SanityProduct[] => {
//   const shuffled = [...array];
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//   }
//   return shuffled;
// };

// export const useSanityProducts = (selectedCategorySlug: string | null): ProductsHookResult => {
//   const [products, setProducts] = useState<SanityProduct[]>([]);
//   const [categories, setCategories] = useState<SanityCategory[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // 1. Fetch Categories
//   useEffect(() => {
//     const fetchCategories = async () => {
//       const query = `*[_type == "category"]{ title, "slug": slug.current }`;
//       try {
//         const data = await client.fetch<SanityCategory[]>(query); 
//         setCategories(data);
//       } catch (err) {
//         console.error("Error fetching categories:", err);
//         setError("Failed to load categories.");
//       }
//     };
//     fetchCategories();
//   }, []);

//   // 2. Fetch Products
//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       setError(null);
      
//       // GROQ Query: Filters by category slug if provided
//       const query = `
//         *[_type == "product" ${selectedCategorySlug ? `&& category->slug.current == $categorySlug` : ''}] {
//           _id,
//           name,
//           "id": _id, 
//           "slug": slug.current,
//           "category": category->title, 
//           mainImage, 
//         }
//       `;

//       try {
//         const params = selectedCategorySlug ? { categorySlug: selectedCategorySlug } : {};
//         const data = await client.fetch<SanityProduct[]>(query, params);
        
//         setProducts(shuffleArray(data));

//       } catch (err) {
//         console.error("Error fetching products:", err);
//         setError("Failed to load products.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [selectedCategorySlug]);

//   return { products, categories, loading, error };
// };