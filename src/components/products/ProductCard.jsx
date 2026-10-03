import { Link } from "react-router-dom";
import {
  formatPrice,
  getBrand,
  getImage,
  getModel,
  getPrice,
  getProductId,
} from "@/utils/product";

const ProductCard = ({ product }) => {
  const id = getProductId(product);
  const image = getImage(product);

  return (
    <Link className="product-card" to={`/product/${id}`}>
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
        <span className="eyebrow">{getBrand(product)}</span>
        <h2>{getModel(product)}</h2>
        <strong>{formatPrice(getPrice(product))}</strong>
      </div>
    </Link>
  );
}

export default ProductCard;
