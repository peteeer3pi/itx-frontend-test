import { Link, useParams } from "react-router-dom";
import ProductImage from "@/components/products/ProductImage";
import ProductDescription from "@/components/products/ProductDescription";
import ProductActions from "@/components/products/ProductActions";
import LoadingState from "@/components/ui/LoadingState";
import ErrorState from "@/components/ui/ErrorState";
import useProduct from "@/hooks/useProduct";

export function ProductDetailsPage() {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);

  if (loading)
    return (
      <div className="page-container">
        <LoadingState label="Cargando detalle…" />
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
        ← Volver a productos  
      </Link>
      <section className="product-detail">
        <ProductImage product={product} />
        <div className="detail-content">
          <ProductDescription product={product} />
          <ProductActions product={product} />
        </div>
      </section>
    </div>
  );
}
