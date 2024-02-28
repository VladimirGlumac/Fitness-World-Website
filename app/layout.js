import "./globals.css";
import Navbar from "./components/Navbar";
import ScrollAnimation from "./components/ScrollAnimation";
import Footer from "./components/Footer";

export const metadata = {
  title: "Gym Website",
  description: "Created by Vladimir Glumac",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Anta">
        <Navbar />
        <ScrollAnimation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
