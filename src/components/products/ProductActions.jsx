import { useMemo, useState } from "react";
import { addProductToCart } from "@/services/api";
import { useCart } from "@/context/CartContext";
import { useNotification } from "@/context/NotificationContext";
import {
  getColors,
  getProductId,
  getStorages,
  optionCode,
} from "@/utils/product";
import CustomSelect from "@/components/forms/CustomSelect";

const getDefaultOption = (options) => {
  return options.length ? optionCode(options[0]) : "";
};

const ProductActions = ({ product }) => {
  const { updateCount } = useCart();
  const { addNotification } = useNotification();
  const colors = useMemo(() => getColors(product), [product]);
  const storages = useMemo(() => getStorages(product), [product]);
  const [colorCode, setColorCode] = useState(() => getDefaultOption(colors));
  const [storageCode, setStorageCode] = useState(() =>
    getDefaultOption(storages),
  );
  const [submitting, setSubmitting] = useState(false);

  async function handleOnSubmit() {
    try {
      setSubmitting(true);
      const response = await addProductToCart({
        id: getProductId(product),
        colorCode,
        storageCode,
      });
      updateCount(response?.count ?? 0);
      addNotification("Producto añadido a la cesta.", "success");
    } catch {
      addNotification(
        "No se ha podido añadir el producto. Inténtalo de nuevo.",
        "error",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="actions-card">
      <div className="form-field">
        <label>Almacenamiento</label>
        <CustomSelect
          id="storage"
          options={storages}
          value={storageCode}
          onChange={setStorageCode}
        />
      </div>

      <div className="form-field">
        <label>Color</label>
        <CustomSelect
          id="color"
          options={colors}
          value={colorCode}
          onChange={setColorCode}
        />
      </div>

      <button
        className="primary-button"
        type="button"
        onClick={handleOnSubmit}
        disabled={submitting || !colors.length || !storages.length}
      >
        {submitting ? "Añadiendo…" : "Añadir a la cesta"}
      </button>
    </section>
  );
};

export default ProductActions;
