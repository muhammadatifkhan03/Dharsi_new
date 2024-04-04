import { Inter } from 'next/font/google';

import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import AuthProvider from '@/providers/AuthProvider';
import ThemeProvider from '@/providers/ThemeProvider';
import { ThemeContextProvider } from '@/context/ThemeContext';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'DHARSI BLOGS',
  description: 'The INSIDES OF DHARSI BLOGS',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className='container'>
                <div className='wrapper'>
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
