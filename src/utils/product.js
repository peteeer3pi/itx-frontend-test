function firstDefined(...values) {
  return values.find(
    (value) => value !== undefined && value !== null && value !== "",
  );
}

export function getProductId(product) {
  return firstDefined(product?.id, product?.productId);
}

export function getBrand(product) {
  return firstDefined(product?.brand, product?.manufacturer, "Unknown brand");
}

export function getModel(product) {
  return firstDefined(product?.model, product?.name, "Unknown model");
}

export function getPrice(product) {
  return firstDefined(product?.price, product?.priceFormatted, "Unknown price");
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

export function getSpec(product, keys, fallback = "—") {
  return firstDefined(...keys.map((key) => product?.[key]), fallback);
}

export function getColors(product) {
  return firstDefined(
    product?.colors,
    product?.colorOptions,
    product?.options?.colors,
    [],
  );
}

export function getStorages(product) {
  return firstDefined(
    product?.storages,
    product?.storageOptions,
    product?.options?.storages,
    [],
  );
}

export function optionCode(option) {
  return firstDefined(option?.code, option?.id, option?.value, option);
}

export function optionLabel(option) {
  return firstDefined(
    option?.name,
    option?.label,
    option?.value,
    option?.capacity,
    String(option),
  );
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
