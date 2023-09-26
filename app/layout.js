import Navbar from "../components/navbar.jsx";

export const metadata = {
  title: 'Mi Tienda con Next.js - HomePage',
  description: 'Esta es la pagina principal de mi tienda',
  keywords: "tienda, online, ecommerce"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
