import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between px-4 border-b border-gray-200 sm:px-6 md:px-8">
      <Link href="/">
        <a className="flex flex-row items-center">
          <Image src={"/logo-sample.png"} width={50} height={50} />
          <p className="pl-1 font-semibold">Sample-logo</p>
        </a>
      </Link>
      <div className="flex flex-row items-center">
        <Link href="/">
          <a className="mr-4 text-sm font-semibold hover:text-blue-500">Home</a>
        </Link>
        <Link href="/about">
          <a className="mx-4 text-sm font-semibold hover:text-blue-500">
            About us
          </a>
        </Link>
        <Link href="/about">
          <a className="mx-4 text-sm font-semibold hover:text-blue-500">Test</a>
        </Link>
        <Link href="/contact">
          <a className="ml-4 text-sm font-semibold hover:text-blue-500">
            Contact us
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
