import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { LayoutProps } from "../types/global";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <main className="flex-grow bg-gray-100 p-4">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

