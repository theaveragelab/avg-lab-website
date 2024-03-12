import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-full fixed top-0 left-0">
      <Image
        src="/background.jpeg"
        alt="background"
        layout="fill"
        className="relative"
      />
    </div>
  );
};

export default Hero;
