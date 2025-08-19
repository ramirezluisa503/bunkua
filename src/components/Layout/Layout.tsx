import { Footer } from '../Footer/Footer';
import { NavBar } from '../NavBar/NavBar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col w-full relative">
      <NavBar />
      <main className="flex-1 w-full overflow-x-hidden">
        <div className="w-full max-w-none">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
