import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/ui/SearchBar";
import LoadingState from "../components/ui/LoadingState";
import ErrorState from "../components/ui/ErrorState";
import useProducts from "../hooks/useProducts";
import { matchesProduct } from "../utils/product";

export default function ProductListPage() {
  const [query, setQuery] = useState("");
  const { products, loading, error } = useProducts();
  const filteredProducts = useMemo(
    () => products.filter((product) => matchesProduct(product, query)),
    [products, query],
  );

  return (
    <div className="page-container">
      <section className="page-heading">
        <div>
          <p className="eyebrow">Catálogo</p>
          <h1>Dispositivos móviles</h1>
          {!loading && !error && (
            <p className="result-count">{filteredProducts.length} productos</p>
          )}
        </div>
        <SearchBar value={query} onChange={setQuery} />
      </section>

      {loading && <LoadingState />}
      {error && <ErrorState />}
      {!loading && !error && filteredProducts.length === 0 && (
        <div className="state-card">
          No hay productos que coincidan con tu búsqueda.
        </div>
      )}
      {!loading && !error && filteredProducts.length > 0 && (
        <section className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id ?? product.productId}
              product={product}
            />
          ))}
        </section>
      )}
    </div>
  );
}
