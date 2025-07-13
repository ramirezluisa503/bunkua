import { Footer } from '../Footer/Footer';
import { NavBar } from '../NavBar/NavBar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto] w-full max-w-dvw">
      <NavBar />
      <main className="max-w-dvw">{children}</main>
      <Footer />
    </div>
  );
};
