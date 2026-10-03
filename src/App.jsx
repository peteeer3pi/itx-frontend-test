import ProductCard from "./components/ProductCard";

const products = [
  {
    id: "1",
    brand: "Apple",
    model: "iPhone 15",
    price: 799,
    image: "https://dummyjson.com/image/300x400/eeeeee/111111&text=iPhone+15",
  },
  {
    id: "2",
    brand: "Samsung",
    model: "Galaxy S24",
    price: 899,
    image: "https://dummyjson.com/image/300x400/eeeeee/111111&text=Galaxy+S24",
  },
  {
    id: "3",
    brand: "Google",
    model: "Pixel 8",
    price: 699,
    image: "https://dummyjson.com/image/300x400/eeeeee/111111&text=Pixel+8",
  },
];

const App = () => {
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
          <p className="result-count">{products.length} productos</p>
        </section>

        <section className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;
