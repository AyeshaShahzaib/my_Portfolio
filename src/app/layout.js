import Header from "./components/header";
import Footer from "./components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
