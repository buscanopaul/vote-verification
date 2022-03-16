import React from "react";
import Image from "next/image";
import Link from "next/link";
import InfoResult from "../components/InfoResult";

function search() {
  return (
    <div className="px-4 mx-auto pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
      <header className="pt-16 pb-9 sm:pb-16 sm:text-center">
        <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl">
          Search your vote
        </h1>
        <p className="text-sm text-gray-400">
          *This is for testing purposes only
        </p>
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
            className="h-12 px-4 space-x-3 text-left bg-white border rounded-lg shadow-sm w-72"
            type="text"
            aria-label="Filter projects"
            placeholder="Enter Reference"
          />
          <Link href="/search">
            <a className="flex items-center justify-center h-12 px-6 mt-5 font-bold text-white bg-blue-500 rounded-lg sm:mt-0 sm:w-auto">
              Search
            </a>
          </Link>
        </form>
      </header>
      <InfoResult />
      <article className="relative flex flex-col">
        <h3 className="mb-4 text-xl font-bold">PRESIDENT</h3>
        <div className="relative flex flex-row items-center w-full p-6 bg-gray-100 rounded-lg md:w-1/2 sm:w-1/2 ">
          <img
            src="/bbm.jpeg"
            className="flex-none object-cover rounded-full w-14 h-14"
            loading="lazy"
          />
          <div className="ml-3">
            <span className="text-base font-semibold">MARCOS, BONGBONG</span>
            <p className="text-sm text-gray-500">
              PARTIDO FEDERAL NG PILIPINAS
            </p>
          </div>
        </div>
      </article>
      <div className="w-full mt-10 bg-gray-200 border-b" />
      <article className="relative flex flex-col mt-10">
        <h3 className="mb-4 text-xl font-bold">VICE PRESIDENT</h3>
        <div className="relative flex flex-row items-center w-full p-6 bg-gray-100 rounded-lg md:w-1/2 sm:w-1/2 ">
          <img
            src="/duterte.jpeg"
            className="flex-none object-cover rounded-full w-14 h-14"
            loading="lazy"
          />
          <div className="ml-3">
            <span className="text-base font-semibold">DUTERTE, SARAH</span>
            <p className="text-sm text-gray-500">LAKAS</p>
          </div>
        </div>
      </article>
      <div className="w-full mt-10 bg-gray-200 border-b" />
      <article className="relative flex flex-col mt-10">
        <h3 className="mb-4 text-xl font-bold">SENATOR</h3>
        <div className="flex flex-wrap">
          <div className="relative flex flex-row items-center w-full mb-6 md:w-1/2 sm:w-1/2">
            <div className="flex flex-row items-center w-full p-6 bg-gray-100 rounded-lg">
              <img
                src="/delima.jpeg"
                className="flex-none object-cover rounded-full w-14 h-14"
                loading="lazy"
              />
              <div className="ml-3">
                <span className="text-base font-semibold">DE LIMA, LEILA</span>
                <p className="text-sm text-gray-500">LIBERAL PARTY</p>
              </div>
            </div>
          </div>
          <div className="relative flex flex-row items-center w-full pl-4 mb-6 md:w-1/2 sm:w-1/2">
            <div className="flex flex-row items-center w-full p-6 bg-gray-100 rounded-lg">
              <img
                src="/marcoleta.jpeg"
                className="flex-none object-cover rounded-full w-14 h-14"
                loading="lazy"
              />
              <div className="ml-3">
                <span className="text-base font-semibold">
                  MARCOLETA, RODANTE
                </span>
                <p className="text-sm text-gray-500">PDPLBN</p>
              </div>
            </div>
          </div>
          <div className="relative flex flex-row items-center w-full mb-6 md:w-1/2 sm:w-1/2">
            <div className="flex flex-row items-center w-full p-6 bg-gray-100 rounded-lg">
              <img
                src="/villar.png"
                className="flex-none object-cover rounded-full w-14 h-14"
                loading="lazy"
              />
              <div className="ml-3">
                <span className="text-base font-semibold">VILLAR, MARK</span>
                <p className="text-sm text-gray-500">NP</p>
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className="w-full mt-10 bg-gray-200 border-b" />
      <article className="relative flex flex-col mt-10">
        <h3 className="mb-4 text-xl font-bold">
          MEMBER, HOUSE OF REPRESENTATIVES
        </h3>
        <div className="relative flex flex-row items-center w-full p-6 bg-gray-100 rounded-lg md:w-1/2 sm:w-1/2 ">
          <img
            src="/echiverri.jpeg"
            className="flex-none object-cover rounded-full w-14 h-14"
            loading="lazy"
          />
          <div className="ml-3">
            <span className="text-base font-semibold">ECHIVERRI, RECOM</span>
            <p className="text-sm text-gray-500">PDDS</p>
          </div>
        </div>
      </article>
      <div className="w-full mt-10 bg-gray-200 border-b" />
      <article className="relative flex flex-col mt-10">
        <h3 className="mb-4 text-xl font-bold">MAYOR</h3>
        <div className="relative flex flex-row items-center w-full p-6 bg-gray-100 rounded-lg md:w-1/2 sm:w-1/2 ">
          <img
            src="/malapitan.jpeg"
            className="flex-none object-cover rounded-full w-14 h-14"
            loading="lazy"
          />
          <div className="ml-3">
            <span className="text-base font-semibold">MALAPITAN, ALONG</span>
            <p className="text-sm text-gray-500">PDPLBN</p>
          </div>
        </div>
      </article>
      <div className="w-full mt-10 bg-gray-200 border-b" />
      <article className="relative flex flex-col mt-10">
        <h3 className="mb-4 text-xl font-bold">VICE-MAYOR</h3>
        <div className="relative flex flex-row items-center w-full p-6 bg-gray-100 rounded-lg md:w-1/2 sm:w-1/2 ">
          <img
            src="/teh.jpeg"
            className="flex-none object-cover rounded-full w-14 h-14"
            loading="lazy"
          />
          <div className="ml-3">
            <span className="text-base font-semibold">TEH, KARINA</span>
            <p className="text-sm text-gray-500">NP</p>
          </div>
        </div>
      </article>
      <div className="w-full mt-10 bg-gray-200 border-b" />
      <article className="relative flex flex-col mt-10">
        <h3 className="mb-4 text-xl font-bold">
          MEMBER, SANGGUNIANG PANLUNGSOD
        </h3>
        <div className="flex flex-wrap">
          <div className="relative flex flex-row items-center w-full mb-6 md:w-1/2 sm:w-1/2">
            <div className="flex flex-row items-center w-full p-6 bg-gray-100 rounded-lg">
              <img
                src="/delima.jpeg"
                className="flex-none object-cover rounded-full w-14 h-14"
                loading="lazy"
              />
              <div className="ml-3">
                <span className="text-base font-semibold">DE LIMA, LEILA</span>
                <p className="text-sm text-gray-500">LIBERAL PARTY</p>
              </div>
            </div>
          </div>
          <div className="relative flex flex-row items-center w-full pl-4 mb-6 md:w-1/2 sm:w-1/2">
            <div className="flex flex-row items-center w-full p-6 bg-gray-100 rounded-lg">
              <img
                src="/marcoleta.jpeg"
                className="flex-none object-cover rounded-full w-14 h-14"
                loading="lazy"
              />
              <div className="ml-3">
                <span className="text-base font-semibold">ABEL, WIN</span>
                <p className="text-sm text-gray-500">PDPLBN</p>
              </div>
            </div>
          </div>
          <div className="relative flex flex-row items-center w-full mb-6 md:w-1/2 sm:w-1/2">
            <div className="flex flex-row items-center w-full p-6 bg-gray-100 rounded-lg">
              <img
                src="/villar.png"
                className="flex-none object-cover rounded-full w-14 h-14"
                loading="lazy"
              />
              <div className="ml-3">
                <span className="text-base font-semibold">AFRICA, MAY</span>
                <p className="text-sm text-gray-500">NP</p>
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className="w-full mt-10 bg-gray-200 border-b" />
      <article className="relative flex flex-col mt-10">
        <h3 className="mb-4 text-xl font-bold">PARTY LIST</h3>
        <div className="relative flex flex-row items-center w-full p-6 bg-gray-100 rounded-lg md:w-1/2 sm:w-1/2 ">
          <img
            src="/1rider.jpeg"
            className="flex-none object-cover rounded-full w-14 h-14"
            loading="lazy"
          />
          <div className="ml-3">
            <span className="text-base font-semibold">1-RIDER PARTYLIST</span>
          </div>
        </div>
      </article>
    </div>
  );
}

export default search;
