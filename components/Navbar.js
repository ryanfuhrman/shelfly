import styles from "../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const { nav, navBrand, navList, navListItems } = styles;
  return (
    <nav className={nav}>
      <Link href="/" className={navBrand} href="#">
        <a className={navBrand}>Shelfly</a>
      </Link>
      <ul className={navList}>
        <li className={navListItems}>
          <Link href="/shelves">
            <a>Shelves</a>
          </Link>
        </li>
        <li className={navListItems}>
          <Link href="/search">
            <a>Search</a>
          </Link>
        </li>
        <li className={navListItems}>
          <Link href="/account">
            <a>Account</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
