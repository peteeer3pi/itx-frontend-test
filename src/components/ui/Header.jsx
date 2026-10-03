import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const { count } = useCart();
  const location = useLocation();
  const isDetail = location.pathname.startsWith("/product/");

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/">
          <span className="brand-mark">ITX</span>
          <span>Mobile Store</span>
        </Link>

        <nav className="breadcrumbs">
          <Link to="/">Productos</Link>
          {isDetail && <span>/</span>}
          {isDetail && <span>Detalle</span>}
        </nav>

        <div className="cart-indicator">
          <ShoppingCartIcon />
          <span>{count}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
