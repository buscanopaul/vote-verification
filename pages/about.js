import React from "react";

function about() {
  return (
    <div className="max-w-5xl px-4 mx-auto pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
      <header className="pt-16 pb-9 sm:pb-16 sm:text-center">
        <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl">
          About us
        </h1>
        <p className="text-lg text-gray-400">
          All the latest Tailwind CSS news, straight from the team.
        </p>
      </header>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
}

export default about;
