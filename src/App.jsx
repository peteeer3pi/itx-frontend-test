import { Navigate, Route, Routes } from "react-router-dom";
import Header from "@/components/ui/Header";
import { ProductListPage } from "@/pages/ProductListPage";
import { ProductDetailsPage } from "@/pages/ProductDetailsPage";
import { NotificationProvider } from "@/context/NotificationContext";
import Notifications from "@/components/notifications/Notifications";

export default function App() {
  return (
    <NotificationProvider>
      <div className="app-shell">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Notifications />
      </div>
    </NotificationProvider>
  );
}
