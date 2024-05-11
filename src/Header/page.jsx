import styles from "./index.module.css"
import Link from "next/link";
const Header = () => {
  return (
    <>
      <div className={styles.box}>
        <Link href="/" passHref>
          Home
        </Link>
        <Link href="/about" passHref>
          About
        </Link>
        <Link href="/contact" passHref>
          Contact
        </Link>
        <Link href="/users" passHref>
          Users
        </Link>
        <Link href="/single" passHref>
          Single User
        </Link>
      </div>
    </>
  );
};

export default Header;
