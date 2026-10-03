import { useEffect, useMemo, useState } from "react";
import { getProducts } from "@/services/api";
import { matchesProduct } from "@/utils/product";

const useProducts = (query) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await getProducts();
        if (!cancelled) setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const filteredProducts = useMemo(
    () => products.filter((product) => matchesProduct(product, query)),
    [products, query],
  );

  return { products: filteredProducts, total: products.length, loading, error };
};

export default useProducts;
