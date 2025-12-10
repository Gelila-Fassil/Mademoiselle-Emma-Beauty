// // types/sanity.ts

// // 1. Image Asset Interface (Simplified)
// export interface SanityImage {
//     _type: 'image';
//     asset: {
//         _ref: string;
//         _type: 'reference';
//     };
// }

// // 2. Category Interface (Used for filtering buttons)
// export interface SanityCategory {
//     title: string;
//     slug: string;
// }

// // 3. Product Interface (Used for the grid items)
// export interface SanityProduct {
//     _id: string;
//     id: string; // Mapped from _id
//     name: string;
//     slug: string;
//     category: string; // The category TITLE (string)
//     mainImage: SanityImage;
// }

// // 4. Hook Return Type
// export interface ProductsHookResult {
//     products: SanityProduct[];
//     categories: SanityCategory[];
//     loading: boolean;
//     error: string | null;
// }