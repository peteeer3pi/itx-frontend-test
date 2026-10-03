const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "https://itx-frontend-test.onrender.com"
).replace(/\/$/, "");

export function getProduct(id) {
  return request(`/api/product/${encodeURIComponent(id)}`);
}

export async function getProducts() {
  const response = await fetch(`${API_BASE_URL}/api/product`, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}
