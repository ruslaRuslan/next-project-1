import Footer from "@/Footer/page";
import Header from "@/Header/page";

export const metadata = {
  title: "Esas title",
  description: "Bu esas proyektir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: "0", padding: "0", boxSizing: "border-box" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
