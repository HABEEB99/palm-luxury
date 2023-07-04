import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center justify-center space-x-1">
      <div className="w-8 h-8 relative overflow-hidden">
        <Image src="/logo.png" fill alt="Logo" className="object-cover" />
      </div>

      <h1 className="text-2xl hidden md:block font-bold text-transparent bg-clip-text bg-gradient-to-bl from-orange-500 to-green-600">
        Palm-Luxury
      </h1>
    </Link>
  );
};

export default Logo;
