import { useState } from "react";
import ProductCard from "@/components/products/ProductCard";
import SearchBar from "@/components/ui/SearchBar";
import LoadingState from "@/components/ui/LoadingState";
import ErrorState from "@/components/ui/ErrorState";
import useProducts from "@/hooks/useProducts";

export const ProductListPage = () => {
  const [query, setQuery] = useState("");
  const { products, loading, error } = useProducts(query);

  return (
    <div className="page-container">
      <section className="page-heading">
        <div>
          <p className="eyebrow">Catálogo</p>
          <h1>Dispositivos móviles</h1>
        </div>
        <SearchBar value={query} onChange={setQuery} />
      </section>

      {loading && <LoadingState label="Cargando productos…" />}
      {error && <ErrorState />}
      {!loading && !error && products.length === 0 && (
        <div className="state-card">
          No hay productos que coincidan con tu búsqueda.
        </div>
      )}
      {!loading && !error && products.length > 0 && (
        <section className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </div>
  );
}

export default ProductListPage;

