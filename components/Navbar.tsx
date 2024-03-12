import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 nav-gradient">
      <Link href="/">
        <Image src="theaveragelab.svg" alt="logo" width={200} height={50} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key}>
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Search"
          icon="/search.svg"
          variant="btn_dark_green"
        />
      </div>
    </nav>
  );
};
