import Link from "next/link";
import styles from "./index.module.css"
export const metadata = {
  title: "Esas title",
  description: "Bu esas proyektir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.box}>
          <Link href="/" passHref>Home</Link>
          <Link href="/about" passHref>About</Link>
          <Link href="/contact" passHref>Contact</Link>
          <Link href="/users" passHref>Users</Link>
        </div>
        {children}
        <div></div>
      </body>
    </html>
  );
}
