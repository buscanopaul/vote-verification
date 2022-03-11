import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-screen bg-[url('https://images.unsplash.com/photo-1494172961521-33799ddd43a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80')] bg-center bg-no-repeat bg-cover">
      <div className="absolute w-full h-full bg-black bg-opacity-50"></div>
      <div className="relative z-30 max-w-5xl px-4 pt-24 mx-auto sm:pt-24 lg:pt-32">
        <h1 className="text-4xl font-bold text-center text-white sm:text-5xl lg:text-6xl">
          Rapidly build modern websites without ever
        </h1>
        <p className="max-w-4xl mx-auto mt-6 text-lg text-center text-white">
          A utility-first CSS framework packed with classes like flex, pt-4,
          text-center and rotate-90 that can be composed to build any design,
          directly in your markup.
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
            placeholder="Ex. 6f87a6bj"
          />
          <Link href="/">
            <a className="flex items-center justify-center h-12 px-6 mt-5 font-bold text-white bg-blue-500 rounded-lg sm:mt-0 sm:w-auto">
              Search
            </a>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Hero;
