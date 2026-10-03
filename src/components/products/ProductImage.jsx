import { getBrand, getImage, getModel } from "@/utils/product";

const ProductImage = ({ product }) => {
  const image = getImage(product);
  return (
    <div className="detail-image">
      {image ? (
        <img src={image} alt={`${getBrand(product)} ${getModel(product)}`} />
      ) : (
        <div className="image-placeholder">Sin imagen disponible</div>
      )}
    </div>
  );
};

export default ProductImage;
