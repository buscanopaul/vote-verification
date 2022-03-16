import React from "react";

function InfoResult() {
  return (
    <div className="flex flex-row flex-wrap items-center w-full mt-20 mb-28 justify-evenly">
      <div className="flex flex-col justify-center w-full mb-4 sm:w-1/4 md:w-1/4">
        <img
          src="/reference.png"
          className="flex-none mb-1 w-14 h-14"
          loading="lazy"
        />
        <h5 className="font-semibold">Reference number</h5>
        <p className="text-sm text-gray-500">fdsa678frew6a</p>
      </div>
      <div className="flex flex-col justify-center w-full mb-6 sm:w-1/4 md:w-1/4">
        <img
          src="/status.png"
          className="flex-none mb-1 w-14 h-14"
          loading="lazy"
        />
        <h5 className="font-semibold">Status</h5>
        <p className="text-sm text-gray-500">COMPLETED</p>
      </div>
      <div className="flex flex-col justify-center w-full mb-6 sm:w-1/4 md:w-1/4">
        <img
          src="/passport.png"
          className="flex-none mb-1 w-14 h-14"
          loading="lazy"
        />
        <h5 className="font-semibold">Precinct ID</h5>
        <p className="text-sm text-gray-500">75010853</p>
      </div>
      <div className="flex flex-col justify-center w-full mb-6 sm:w-1/4 md:w-1/4">
        <img
          src="/gps.png"
          className="flex-none object-cover mb-1 w-14 h-14"
          loading="lazy"
        />
        <h5 className="font-semibold">Voting Address</h5>
        <p className="text-sm text-gray-500">
          BARANGAY 178, CITY OF CALOOCAN, NCR - THIRD DISTRICT
        </p>
      </div>
    </div>
  );
}

export default InfoResult;
