import {
  formatPrice,
  getBrand,
  getModel,
  getPrice,
  getSpec,
} from "@/utils/product";

const specs = [
  ["CPU", ["cpu", "processor"]],
  ["RAM", ["ram", "memory"]],
  ["Sistema Operativo", ["os", "operatingSystem", "operating_system"]],
  [
    "Resolución de pantalla",
    ["displayResolution", "screenResolution", "resolution"],
  ],
  ["Batería", ["battery", "batteryCapacity"]],
  ["Cámaras", ["cameras", "camera", "primaryCamera"]],
  ["Dimensiones", ["dimensions", "dimension"]],
  ["Peso", ["weight"]],
];

const ProductDescription = ({ product }) => {
  return (
    <section>
      <p className="eyebrow">{getBrand(product)}</p>
      <h1 className="detail-title">{getModel(product)}</h1>
      <p className="detail-price">{formatPrice(getPrice(product))}</p>

      <dl className="spec-list">
        {specs.map(([label, keys]) => (
          <div key={label} className="spec-row">
            <dt>{label}</dt>
            <dd>{getSpec(product, keys)}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default ProductDescription;
