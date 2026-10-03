import { createContext, useContext, useMemo, useState } from "react";

const CART_COUNT_KEY = "itx:cart-count";
const CartContext = createContext(null);

const getInitialCount = () => {
  try {
    return Number(localStorage.getItem(CART_COUNT_KEY) || 0);
  } catch {
    return 0;
  }
};

const CartProvider = ({ children }) => {
  const [count, setCount] = useState(getInitialCount);

  const updateCount = (nextCount) => {
    const safeCount = Number(nextCount) || 0;
    setCount(safeCount);
    try {
      localStorage.setItem(CART_COUNT_KEY, String(safeCount));
    } catch {
      // No-op.
    }
  };

  const value = useMemo(() => ({ count, updateCount }), [count]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};

export { CartProvider, useCart };
