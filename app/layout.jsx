import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import AuthProvider from '@/components/AuthProvider';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Propery Pulse',
  keywords: 'rental, property, real estate',
  description: 'Find the perfect rental property',
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
