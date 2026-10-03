import {
  formatPrice,
  getBrand,
  getImage,
  getModel,
  getPrice,
} from "../utils/product";

export default function ProductCard({ product }) {
  const image = getImage(product);

  return (
    <article className="product-card">
      <div className="product-card-image">
        {image ? (
          <img
            src={image}
            alt={`${getBrand(product)} ${getModel(product)}`}
            loading="lazy"
          />
        ) : (
          <span>Sin imagen</span>
        )}
      </div>
      <div className="product-card-body">
        <p className="product-brand">{getBrand(product)}</p>
        <h2>{getModel(product)}</h2>
        <strong>{formatPrice(getPrice(product))}</strong>
      </div>
    </article>
  );
}
