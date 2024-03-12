"use client";

import "./global.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="stylesheet" href="https://use.typekit.net/lrf5xdx.css"></link>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      ></link>

      <body>
        <main>{children}</main>
      </body>

      <div className="container-1">
        <div className="homeBackground"></div>
        <nav>
          <div className="img-wrapper">
            <img src="theaveragelab.svg" />
          </div>
          <ul className="menu">
            <li>
              <Link href="/"></Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/research">Research</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/press">Press</Link>
            </li>
          </ul>
          <div className="search">
            <img src="search.svg" />
          </div>
        </nav>
      </div>
    </>
  );
}
