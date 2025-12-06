"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import Image from "next/image";
import { ShoppingBag, Heart } from "lucide-react";

const products = [
  // Fragrances
  {
    id: 1,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic14.jpg",
  },

  {
    id: 2,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic15.jpg",
  },

  {
    id: 3,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic16.jpg",
  },
  {
    id: 4,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic17.jpg",
  },
  {
    id: 5,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic18.jpg",
  },
  {
    id: 6,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic19.jpg",
  },
  {
    id: 7,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic20.jpg",
  },
  {
    id: 8,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic21.jpg",
  },
  {
    id: 9,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic22.jpg",
  },
  {
    id: 10,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic23.jpg",
  },
  {
    id: 11,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic24.jpg",
  },
  {
    id: 12,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic25.jpg",
  },
  {
    id: 13,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic26.jpg",
  },
  {
    id: 14,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic27.jpg",
  },
  {
    id: 15,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic28.jpg",
  },
  {
    id: 16,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic29.jpg",
  },
  {
    id: 17,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic30.jpg",
  },
  {
    id: 18,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic31.jpg",
  },
  {
    id: 19,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic32.jpg",
  },
  {
    id: 20,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic33.jpg",
  },
  {
    id: 21,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic34.jpg",
  },
  {
    id: 22,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic35.jpg",
  },
  {
    id: 23,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic36.jpg",
  },
  {
    id: 24,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic37.jpg",
  },
  {
    id: 25,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic37.jpg",
  },
  {
    id: 26,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic39.jpg",
  },
  {
    id: 27,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic40.jpg",
  },
  {
    id: 28,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic1.jpg",
  },
  {
    id: 29,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic2.jpg",
  },
  {
    id: 30,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic3.jpg",
  },

  {
    id: 31,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic4.jpg",
  },
  {
    id: 32,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic5.jpg",
  },
  {
    id: 33,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic6.jpg",
  },
  {
    id: 34,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic7.jpg",
  },
  {
    id: 35,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic8.jpg",
  },
  {
    id: 36,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic9.jpg",
  },

  {
    id: 37,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic10.jpg",
  },
  {
    id: 38,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic11.jpg",
  },
  {
    id: 39,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic12.jpg",
  },
  {
    id: 40,
    name: "Luxury Perfume",
    category: "Women's Perfume",
    image: "/women-perfums/pic13.jpg",
  },

  // Men's Perfume
  {
    id: 54,
    name: "Men's Luxury Perfume",
    category: "Men's Perfume",
    image: "/men-perfumes/pic1.jpg",
  },
  {
    id: 55,
    name: "Men's Luxury Perfume",
    category: "Men's Perfume",
    image: "/men-perfumes/pic2.jpg",
  },
  {
    id: 56,
    name: "Men's Luxury Perfume",
    category: "Men's Perfume",
    image: "/men-perfumes/pic3.jpg",
  },
  {
    id: 57,
    name: "Men's Luxury Perfume",
    category: "Men's Perfume",
    image: "/men-perfumes/pic4.jpg",
  },
  {
    id: 58,
    name: "Men's Luxury Perfume",
    category: "Men's Perfume",
    image: "/men-perfumes/pic5.jpg",
  },
  {
    id: 59,
    name: "Men's Luxury Perfume",
    category: "Men's Perfume",
    image: "/men-perfumes/pic6.jpg",
  },
  {
    id: 60,
    name: "Men's Luxury Perfume",
    category: "Men's Perfume",
    image: "/men-perfumes/pic7.jpg",
  },
  {
    id: 61,
    name: "Men's Luxury Perfume",
    category: "Men's Perfume",
    image: "/men-perfumes/pic8.jpg",
  },
  {
    id: 62,
    name: "Men's Luxury Perfume",
    category: "Men's Perfume",
    image: "/men-perfumes/pic9.jpg",
  },
  {
    id: 63,
    name: "Men's Luxury Perfume",
    category: "Men's Perfume",
    image: "/men-perfumes/pic10.jpg",
  },
  {
    id: 64,
    name: "Men's Luxury Perfume",
    category: "Men's Perfume",
    image: "/men-perfumes/pic11.jpg",
  },
  {
    id: 65,
    name: "Men's Luxury Perfume",
    category: "Men's Perfume",
    image: "/men-perfumes/pic12.jpg",
  },
  {
    id: 66,
    name: "Men's Luxury Perfume",
    category: "Men's Perfume",
    image: "/men-perfumes/pic13.jpg",
  },
  {
    id: 67,
    name: "Men's Luxury Perfume",
    category: "Men's Perfume",
    image: "/men-perfumes/pic14.jpg",
  },
  {
    id: 68,
    name: "Men's Luxury Perfume",
    category: "Men's Perfume",
    image: "/men-perfumes/pic15.jpg",
  },
  {
    id: 69,
    name: "Men's Luxury Perfume",
    category: "Men's Perfume",
    image: "/men-perfumes/pic16.jpg",
  },
  {
    id: 70,
    name: "Men's Luxury Perfume",
    category: "Men's Perfume",
    image: "/men-perfumes/pic17.jpg",
  },
  {
    id: 71,
    name: "Men's Luxury Perfume",
    category: "Men's Perfume",
    image: "/men-perfumes/pic18.jpg",
  },
  {
    id: 72,
    name: "Men's Luxury Perfume",
    category: "Men's Perfume",
    image: "/men-perfumes/pic19.jpg",
  },

  // Makeup
  {
    id: 41,
    name: "Premium Makeup Kit",
    category: "Makeup",
    image: "/high-end-makeup-palette-and-brushes-gold-black.jpg",
  },
  {
    id: 42,
    name: "Lipstick Collection",
    category: "Makeup",
    image: "/luxury-lipstick-collection-red-pink-nude-colors.jpg",
  },
  {
    id: 43,
    name: "Eye Shadow Palette",
    category: "Makeup",
    image: "/luxury-eyeshadow-palette-shimmer-gold-bronze.jpg",
  },
  {
    id: 44,
    name: "Mascara",
    category: "Makeup",
    image: "/luxury-mascara-with-gold-packaging.jpg",
  },
  {
    id: 45,
    name: "Foundation",
    category: "Makeup",
    image: "/premium-liquid-foundation-bottle-luxury-packaging.jpg",
  },
  {
    id: 46,
    name: "Face Products",
    category: "Makeup",
    image: "/makeup-face-products-palette-compacts.jpg",
  },
  // Makeup folder images (21 items)
  {
    id: 300,
    name: "Makeup Pic 1",
    category: "Makeup",
    image: "/makeup/pic1.jpg",
  },
  {
    id: 301,
    name: "Makeup Pic 2",
    category: "Makeup",
    image: "/makeup/pic2.jpg",
  },
  {
    id: 302,
    name: "Makeup Pic 3",
    category: "Makeup",
    image: "/makeup/pic3.jpg",
  },
  {
    id: 303,
    name: "Makeup Pic 4",
    category: "Makeup",
    image: "/makeup/pic4.jpg",
  },
  {
    id: 304,
    name: "Makeup Pic 5",
    category: "Makeup",
    image: "/makeup/pic5.jpg",
  },
  {
    id: 305,
    name: "Makeup Pic 6",
    category: "Makeup",
    image: "/makeup/pic6.jpg",
  },
  {
    id: 306,
    name: "Makeup Pic 7",
    category: "Makeup",
    image: "/makeup/pic7.jpg",
  },
  {
    id: 307,
    name: "Makeup Pic 8",
    category: "Makeup",
    image: "/makeup/pic8.jpg",
  },
  {
    id: 308,
    name: "Makeup Pic 9",
    category: "Makeup",
    image: "/makeup/pic9.jpg",
  },
  {
    id: 309,
    name: "Makeup Pic 10",
    category: "Makeup",
    image: "/makeup/pic10.jpg",
  },
  {
    id: 310,
    name: "Makeup Pic 11",
    category: "Makeup",
    image: "/makeup/pic11.jpg",
  },
  {
    id: 311,
    name: "Makeup Pic 12",
    category: "Makeup",
    image: "/makeup/pic12.jpg",
  },
  {
    id: 312,
    name: "Makeup Pic 13",
    category: "Makeup",
    image: "/makeup/pic13.jpg",
  },
  {
    id: 313,
    name: "Makeup Pic 14",
    category: "Makeup",
    image: "/makeup/pic14.jpg",
  },
  {
    id: 314,
    name: "Makeup Pic 15",
    category: "Makeup",
    image: "/makeup/pic15.jpg",
  },
  {
    id: 315,
    name: "Makeup Pic 16",
    category: "Makeup",
    image: "/makeup/pic16.jpg",
  },
  {
    id: 316,
    name: "Makeup Pic 17",
    category: "Makeup",
    image: "/makeup/pic17.jpg",
  },
  {
    id: 317,
    name: "Makeup Pic 18",
    category: "Makeup",
    image: "/makeup/pic18.jpg",
  },
  {
    id: 318,
    name: "Makeup Pic 19",
    category: "Makeup",
    image: "/makeup/pic19.jpg",
  },
  {
    id: 319,
    name: "Makeup Pic 20",
    category: "Makeup",
    image: "/makeup/pic20.jpg",
  },
  {
    id: 320,
    name: "Makeup Pic 21",
    category: "Makeup",
    image: "/makeup/pic21.jpg",
  },
  // Lipstick collection (added)
  {
    id: 100,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic1.jpg",
  },
  {
    id: 101,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic2.jpg",
  },
  {
    id: 102,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic3.jpg",
  },
  {
    id: 103,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic4.jpg",
  },
  {
    id: 104,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic5.jpg",
  },
  {
    id: 105,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic6.jpg",
  },
  {
    id: 106,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic7.jpg",
  },
  {
    id: 107,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic8.jpg",
  },
  {
    id: 108,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic9.jpg",
  },
  {
    id: 109,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic10.jpg",
  },
  {
    id: 110,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic11.jpg",
  },
  {
    id: 111,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic12.jpg",
  },
  {
    id: 112,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic13.jpg",
  },
  {
    id: 113,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic14.jpg",
  },
  {
    id: 114,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic15.jpg",
  },
  {
    id: 115,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic16.jpg",
  },
  {
    id: 116,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic17.jpg",
  },
  {
    id: 117,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic18.jpg",
  },
  {
    id: 118,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic19.jpg",
  },
  {
    id: 119,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic20.jpg",
  },
  {
    id: 120,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic21.jpg",
  },
  {
    id: 121,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic22.jpg",
  },
  {
    id: 122,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic23.jpg",
  },
  {
    id: 123,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic24.jpg",
  },
  {
    id: 124,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic25.jpg",
  },
  {
    id: 125,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic26.jpg",
  },
  {
    id: 126,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic27.jpg",
  },
  {
    id: 127,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic28.jpg",
  },
  {
    id: 128,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic29.jpg",
  },
  {
    id: 129,
    name: "Lipstick",
    category: "Lipstick",
    image: "/lipstick/pic1.jpg",
  },
  // Skincare
  {
    id: 47,
    name: "Skincare Serum",
    category: "Skincare",
    image: "/luxury-skincare-serum-bottle-elegant-black-gold.jpg",
  },
  {
    id: 48,
    name: "Essence Serum",
    category: "Skincare",
    image: "/luxury-essence-serum-bottle-transparent.jpg",
  },
  {
    id: 49,
    name: "Face Cream",
    category: "Skincare",
    image: "/luxury-face-cream-jar-gold-black-elegant.jpg",
  },
  {
    id: 50,
    name: "Body Oil",
    category: "Skincare",
    image: "/premium-body-oil-luxurious-packaging.jpg",
  },
  {
    id: 51,
    name: "Premium Skincare",
    category: "Skincare",
    image: "/premium-skincare-bottles-and-creams.jpg",
  },
  // Additional Skincare images (from public/skincare pic1..pic42)
  {
    id: 200,
    name: "Skincare Product 1",
    category: "Skincare",
    image: "/skincare/pic1.jpg",
  },
  {
    id: 201,
    name: "Skincare Product 2",
    category: "Skincare",
    image: "/skincare/pic2.jpg",
  },
  {
    id: 202,
    name: "Skincare Product 3",
    category: "Skincare",
    image: "/skincare/pic3.jpg",
  },
  {
    id: 203,
    name: "Skincare Product 4",
    category: "Skincare",
    image: "/skincare/pic4.jpg",
  },
  {
    id: 204,
    name: "Skincare Product 5",
    category: "Skincare",
    image: "/skincare/pic5.jpg",
  },
  {
    id: 205,
    name: "Skincare Product 6",
    category: "Skincare",
    image: "/skincare/pic6.jpg",
  },
  {
    id: 206,
    name: "Skincare Product 7",
    category: "Skincare",
    image: "/skincare/pic7.jpg",
  },
  {
    id: 207,
    name: "Skincare Product 8",
    category: "Skincare",
    image: "/skincare/pic8.jpg",
  },
  {
    id: 208,
    name: "Skincare Product 9",
    category: "Skincare",
    image: "/skincare/pic9.jpg",
  },
  {
    id: 209,
    name: "Skincare Product 10",
    category: "Skincare",
    image: "/skincare/pic10.jpg",
  },
  {
    id: 210,
    name: "Skincare Product 11",
    category: "Skincare",
    image: "/skincare/pic11.jpg",
  },
  {
    id: 211,
    name: "Skincare Product 12",
    category: "Skincare",
    image: "/skincare/pic12.jpg",
  },
  {
    id: 212,
    name: "Skincare Product 13",
    category: "Skincare",
    image: "/skincare/pic13.jpg",
  },
  {
    id: 213,
    name: "Skincare Product 14",
    category: "Skincare",
    image: "/skincare/pic14.jpg",
  },
  {
    id: 214,
    name: "Skincare Product 15",
    category: "Skincare",
    image: "/skincare/pic15.jpg",
  },
  {
    id: 215,
    name: "Skincare Product 16",
    category: "Skincare",
    image: "/skincare/pic16.jpg",
  },
  {
    id: 216,
    name: "Skincare Product 17",
    category: "Skincare",
    image: "/skincare/pic17.jpg",
  },
  {
    id: 217,
    name: "Skincare Product 18",
    category: "Skincare",
    image: "/skincare/pic18.jpg",
  },
  {
    id: 218,
    name: "Skincare Product 19",
    category: "Skincare",
    image: "/skincare/pic19.jpg",
  },
  {
    id: 219,
    name: "Skincare Product 20",
    category: "Skincare",
    image: "/skincare/pic20.jpg",
  },
  {
    id: 220,
    name: "Skincare Product 21",
    category: "Skincare",
    image: "/skincare/pic21.jpg",
  },
  {
    id: 221,
    name: "Skincare Product 22",
    category: "Skincare",
    image: "/skincare/pic22.jpg",
  },
  {
    id: 222,
    name: "Skincare Product 23",
    category: "Skincare",
    image: "/skincare/pic23.jpg",
  },
  {
    id: 223,
    name: "Skincare Product 24",
    category: "Skincare",
    image: "/skincare/pic24.jpg",
  },
  {
    id: 224,
    name: "Skincare Product 25",
    category: "Skincare",
    image: "/skincare/pic25.jpg",
  },
  {
    id: 225,
    name: "Skincare Product 26",
    category: "Skincare",
    image: "/skincare/pic26.jpg",
  },
  {
    id: 226,
    name: "Skincare Product 27",
    category: "Skincare",
    image: "/skincare/pic27.jpg",
  },
  {
    id: 227,
    name: "Skincare Product 28",
    category: "Skincare",
    image: "/skincare/pic28.jpg",
  },
  {
    id: 228,
    name: "Skincare Product 29",
    category: "Skincare",
    image: "/skincare/pic29.jpg",
  },
  {
    id: 229,
    name: "Skincare Product 30",
    category: "Skincare",
    image: "/skincare/pic30.jpg",
  },
  {
    id: 230,
    name: "Skincare Product 31",
    category: "Skincare",
    image: "/skincare/pic31.jpg",
  },
  {
    id: 231,
    name: "Skincare Product 32",
    category: "Skincare",
    image: "/skincare/pic32.jpg",
  },
  {
    id: 232,
    name: "Skincare Product 33",
    category: "Skincare",
    image: "/skincare/pic33.jpg",
  },
  {
    id: 233,
    name: "Skincare Product 34",
    category: "Skincare",
    image: "/skincare/pic34.jpg",
  },
  {
    id: 234,
    name: "Skincare Product 35",
    category: "Skincare",
    image: "/skincare/pic35.jpg",
  },
  {
    id: 235,
    name: "Skincare Product 36",
    category: "Skincare",
    image: "/skincare/pic36.jpg",
  },
  {
    id: 236,
    name: "Skincare Product 37",
    category: "Skincare",
    image: "/skincare/pic37.jpg",
  },
  {
    id: 237,
    name: "Skincare Product 38",
    category: "Skincare",
    image: "/skincare/pic38.jpg",
  },
  {
    id: 238,
    name: "Skincare Product 39",
    category: "Skincare",
    image: "/skincare/pic39.jpg",
  },
  {
    id: 239,
    name: "Skincare Product 40",
    category: "Skincare",
    image: "/skincare/pic40.jpg",
  },
  {
    id: 240,
    name: "Skincare Product 41",
    category: "Skincare",
    image: "/skincare/pic41.jpg",
  },
  {
    id: 241,
    name: "Skincare Product 42",
    category: "Skincare",
    image: "/skincare/pic42.jpg",
  },
  // Gift Sets
  {
    id: 52,
    name: "Luxury Gift Set",
    category: "Gift Sets",
    image: "/luxury-beauty-gift-set-with-gold-accents.jpg",
  },
  {
    id: 53,
    name: "Cosmetics Collection",
    category: "Gift Sets",
    image: "/luxury-cosmetics-makeup-collection-display-elegant.jpg",
  },
];

interface ProductGridProps {
  initialCategory?: string | null;
}

export default function ProductGrid({
  initialCategory = null,
}: ProductGridProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    initialCategory
  );
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set visible immediately, then use observer for animations
    setIsVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Fallback: ensure visibility after a short delay
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  // Update selected category when initialCategory changes
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
      // Scroll to product grid when category is set from URL
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [initialCategory]);

  // Shuffle function to randomize array (Fisher-Yates algorithm)
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const categories = Array.from(new Set(products.map((p) => p.category)));

  // Filter and shuffle products based on selected category
  // Shuffle happens every time the category changes for true randomness
  const filteredProducts = useMemo(() => {
    const filtered = selectedCategory
      ? products.filter((p) => p.category === selectedCategory)
      : products;
    return shuffleArray(filtered);
  }, [selectedCategory]);

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="w-[85%] mx-auto">
        {/* Category filter */}
        <div className="mb-16">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-full border transition-all ${
                selectedCategory === null
                  ? "bg-[#BBA14F] text-black border-[#BBA14F]"
                  : "bg-transparent text-white/70 border-[#BBA14F]/20 hover:border-[#BBA14F]/40"
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full border transition-all ${
                  selectedCategory === category
                    ? "bg-[#BBA14F] text-black border-[#BBA14F]"
                    : "bg-transparent text-white/70 border-[#BBA14F]/20 hover:border-[#BBA14F]/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid - Staggered layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <a
              key={product.id}
              href="/collections"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative overflow-hidden rounded-2xl border border-[#BBA14F]/20 hover:border-[#BBA14F]/50 transition-all duration-500 cursor-pointer block ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } ${hoveredId === product.id ? "scale-105 z-10" : "scale-100"}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-black/20">
                <Image
                  src={product.image || "/placeholder.jpg"}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={`object-cover transition-transform duration-700 ${
                    hoveredId === product.id ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#BBA14F]/20 backdrop-blur-sm rounded-full border border-[#BBA14F]/30">
                  <span className="text-[#BBA14F] text-xs uppercase tracking-widest font-light">
                    {product.category}
                  </span>
                </div>

                {/* Favorite button */}
                <button className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-sm rounded-full border border-[#BBA14F]/20 hover:bg-[#BBA14F]/20 transition-all opacity-0 group-hover:opacity-100">
                  <Heart className="w-4 h-4 text-[#BBA14F]" />
                </button>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-light text-white mb-2 group-hover:text-[#BBA14F] transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-end">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.location.href = "/collections";
                      }}
                      className="p-2 bg-[#BBA14F] text-black rounded-full hover:bg-[#d4be70] transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 inline-flex items-center justify-center"
                    >
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Load more button */}
        <div className="text-center mt-16">
          <a
            href="/collections"
            className="px-8 py-4 bg-[#BBA14F] text-black font-light text-lg uppercase tracking-widest rounded-lg hover:bg-[#d4be70] transition inline-flex items-center justify-center"
          >
            Load More Products
          </a>
        </div>
      </div>
    </section>
  );
}
