import React from "react";

const contact = () => {
  return (
    <div className="max-w-5xl px-4 mx-auto pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
      <header className="pt-16 pb-9 sm:pb-16 sm:text-center">
        <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl">
          Buy me a drink
        </h1>
        <p className="text-lg text-gray-400">#BumotoKa</p>
      </header>
      <div className="">
        <p>Crypto Wallet Address</p>
        <p className="w-full text-gray-500 break-words md:w-1/2">
          0x877ab6ef80b7ef15dd688b527c98e8e875c471215015da69bdb4ad7a46f4c0ce3b8c01ef671216e89d301cff84e183b7702408ca8bb04934b08d7561f4590d261b
        </p>
      </div>
    </div>
  );
};

export default contact;
