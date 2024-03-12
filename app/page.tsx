import Billboard from "@/components/Billboard";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Billboard />
    </>
  );
}
