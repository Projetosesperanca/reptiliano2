import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFloat from "../WhatsAppFloat";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-40 sm:pt-44 md:pt-52">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
