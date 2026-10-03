import { readCache, writeCache, CACHE_KEYS } from "@/services/cache";

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "https://itx-frontend-test.onrender.com"
).replace(/\/$/, "");

const API_ENDPOINTS = {
  PRODUCTS: "/api/product",
  PRODUCT_DETAIL: "/api/product/",
  CART: "/api/cart",
};

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      Accept: "application/json",
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

export async function getProducts() {
  const cached = readCache(CACHE_KEYS.PRODUCTS);
  if (cached) return cached;

  const products = await request(API_ENDPOINTS.PRODUCTS);
  writeCache(CACHE_KEYS.PRODUCTS, products);
  return products;
}

export function getProduct(id) {
  return request(`${API_ENDPOINTS.PRODUCT_DETAIL}${encodeURIComponent(id)}`);
}

export function addProductToCart({ id, colorCode, storageCode }) {
  return request(API_ENDPOINTS.CART, {
    method: "POST",
    body: JSON.stringify({ id, colorCode, storageCode }),
  });
}
