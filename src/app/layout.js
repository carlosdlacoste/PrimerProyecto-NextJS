import Navbar from "@/components/navbar.jsx";
import {Roboto} from 'next/font/google';
import "@/../styles/globals.css";

export const metadata = {
  title: 'Mi Tienda con Next.js - HomePage',
  description: 'Esta es la pagina principal de mi tienda',
  keywords: "tienda, online, ecommerce"
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
