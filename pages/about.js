import React from "react";

function about() {
  return (
    <div className="max-w-5xl px-4 mx-auto pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
      <header className="pt-16 pb-9 sm:pb-16 sm:text-center">
        <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl">
          About us
        </h1>
        <p className="text-lg text-gray-400">Every vote matters. You matter.</p>
      </header>
      <p>
        Vote Verification PH is the non-official voter verification partner of
        the Commission on Elections. Vote Verification PH is a non-profit,
        non-partisan online verification of votes aimed at mobilizing Filipinos
        to register to vote for the 2022 national and local elections and verify
        their vote anonymously
      </p>
    </div>
  );
}

export default about;
