import ProductCard from "./components/ProductCard";
import LoadingState from "./components/ui/LoadingState";
import ErrorState from "./components/ui/ErrorState";
import useProducts from "./hooks/useProducts";

export default function App() {
  const { products, loading, error } = useProducts();

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-inner">
          <strong>ITX Mobile Store</strong>
        </div>
      </header>

      <main className="page-container">
        <section className="page-heading">
          <p className="eyebrow">Catálogo</p>
          <h1>Dispositivos móviles</h1>
          {!loading && !error && (
            <p className="result-count">{products.length} productos</p>
          )}
        </section>

        {loading && <LoadingState />}
        {error && <ErrorState />}

        {!loading && !error && products.length === 0 && (
          <div className="state-card">No hay productos disponibles.</div>
        )}

        {!loading && !error && products.length > 0 && (
          <section className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
