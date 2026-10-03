const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
      <div className="product-card-image">
        <img src={product.image} alt={`${product.brand} ${product.model}`} />
      </div>
      <div className="product-card-body">
        <p className="product-brand">{product.brand}</p>
        <h2>{product.model}</h2>
        <strong>{product.price} €</strong>
      </div>
    </article>
  );
};

export default ProductCard;
