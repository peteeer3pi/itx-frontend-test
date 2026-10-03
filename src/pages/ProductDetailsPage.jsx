import { Link, useParams } from "react-router-dom";
import LoadingState from "../components/ui/LoadingState";
import ErrorState from "../components/ui/ErrorState";
import useProduct from "../hooks/useProduct";
import {
  formatPrice,
  getBrand,
  getImage,
  getModel,
  getPrice,
} from "../utils/product";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);

  if (loading)
    return (
      <div className="page-container">
        <LoadingState label="Cargando producto…" />
      </div>
    );
  if (error || !product)
    return (
      <div className="page-container">
        <ErrorState />
      </div>
    );

  return (
    <div className="page-container">
      <Link className="back-link" to="/">
        ← Volver al catálogo
      </Link>
      <section className="product-detail">
        <div className="product-detail-image">
          {getImage(product) ? (
            <img
              src={getImage(product)}
              alt={`${getBrand(product)} ${getModel(product)}`}
            />
          ) : (
            <span>Sin imagen</span>
          )}
        </div>
        <div className="detail-content">
          <p className="eyebrow">{getBrand(product)}</p>
          <h1>{getModel(product)}</h1>
          <p className="detail-price">{formatPrice(getPrice(product))}</p>
          <p>Consulta las características disponibles para este producto.</p>
        </div>
      </section>
    </div>
  );
}
