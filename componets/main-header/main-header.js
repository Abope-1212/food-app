import Link from "next/link";
import Image from "next/image";

import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png";
import NavLink from "./nav-link";
// import navLinkclasses from "./nav-link.module.css";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          Dove Foods
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
