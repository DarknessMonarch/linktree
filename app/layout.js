import '@/app/style/globals.css';
import { Poppins } from 'next/font/google';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://jolies-links.com/'),
  title: 'jolies-links',
  applicationName: 'jolies-links',
  author: 'Torcah',
  images: "https://raw.githubusercontent.com/DarknessMonarch/jolies-links/master/public/assets/banner.png",
  description: 'links to all my social media pages and website',
  keywords: ['hair', 'beauty', 'salon', 'jolies-links', 'hair product', 'beauty product', 'salon product'],

  openGraph: {
    title: 'jolies-links',
    description: 'links to all my social media pages and website',
    url: 'https://jolies-links.com/',
    siteName: 'jolies-links',
    images: "https://raw.githubusercontent.com/DarknessMonarch/jolies-links/master/public/assets/banner.png",

  },

  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={poppins.className}>
          {children}
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </body>
    </html>
  );
}
