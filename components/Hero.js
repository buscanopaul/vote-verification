import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();

  const handleSearch = (e, path) => {
    console.log(path);
    router.push(path);
  };

  return (
    <div className="h-screen bg-[url('https://www.rappler.com/tachyon/2022/01/philippine-elections-voters-20160509-001-scaled.jpeg')] bg-center bg-no-repeat bg-cover">
      <div className="absolute w-full h-full bg-black bg-opacity-50"></div>
      <div className="relative z-30 max-w-5xl px-4 pt-24 mx-auto sm:pt-24 lg:pt-32">
        <h1 className="text-4xl font-bold text-center text-white sm:text-5xl lg:text-6xl">
          Easily verify your vote from the Canvasing System
        </h1>
        <p className="max-w-4xl mx-auto mt-6 text-lg text-center text-white">
          It is the mandate of COMELEC to assure each Filipino that the conduct
          of elections is Secure, Accurate, Free and Fair. #VoteSAFEPilipinas!
        </p>
      </div>
      <div className="relative">
        <form
          action="http://www.acme.com/register"
          method="POST"
          className="flex flex-col items-center justify-center mt-6 space-x-6 text-sm md:flex-row sm:mt-10"
        >
          <input
            id="name"
            type="text"
            autocomplete="name"
            required
            className="h-12 px-4 space-x-3 text-left bg-white rounded-lg shadow-sm w-72"
            type="text"
            aria-label="Filter projects"
            placeholder="Enter Reference"
          />
          <Link href="/">
            <a
              onClick={(e) => handleSearch(e, "/search")}
              className="flex items-center justify-center h-12 px-6 mt-5 font-bold text-white bg-blue-500 rounded-lg sm:mt-0 sm:w-auto"
            >
              Search
            </a>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Hero;
