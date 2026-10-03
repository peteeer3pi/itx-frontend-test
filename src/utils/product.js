function firstDefined(...values) {
  return values.find(
    (value) => value !== undefined && value !== null && value !== "",
  );
}

export function getBrand(product) {
  return firstDefined(
    product?.brand,
    product?.manufacturer,
    "Marca desconocida",
  );
}

export function getModel(product) {
  return firstDefined(product?.model, product?.name, "Modelo desconocido");
}

export function getImage(product) {
  return firstDefined(
    product?.imgUrl,
    product?.imageUrl,
    product?.image,
    product?.img,
    "",
  );
}

export function getPrice(product) {
  return firstDefined(product?.price, product?.priceFormatted, null);
}

export function matchesProduct(product, query) {
  const normalized = query.trim().toLocaleLowerCase();
  if (!normalized) return true;
  return `${getBrand(product)} ${getModel(product)}`
    .toLocaleLowerCase()
    .includes(normalized);
}

export function formatPrice(price) {
  const value = Number(price);
  return Number.isNaN(value) ? "Precio no disponible" : `${value.toFixed(2)} €`;
}
