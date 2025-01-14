"use client";
import Image from "next/image";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="overflow-hidden bg-[url(../public/images/bg.jpg)] bg-top bg-scroll bg-cover mx-auto px-4">
        <div className="bg-violet-50 mx-4 my-6 px-8 pt-4 rounded-2xl shadow-xl">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={49}
            height={35}
            className="my-8 lg:mx-12 flex"
          />
          <header className="grid grid-cols-1 gap-4 justify-center lg:grid-cols-3 lg:gap-8 lg:px-20">
            <div className="text-center lg:text-left lg:mb-8 lg:col-span-2">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <span className="w-12 h-0.5 bg-indigo-800"></span>
                <p className="font-medium text-indigo-900 text-xl">
                  Fullstack Developer
                </p>
              </div>
              <h1 className="font-bold text-gray-800 text-3xl md:text-5xl xl:text-6xl mb-4">
                Justine Nicolao
              </h1>
              <h2 className="text-gray-700 text-2xl xl:text-4xl mb-4">
                Software Engineer
              </h2>
              <p className="font-normal text-gray-600 text-sm md:text-md lg:w-4/5 xl:text-lg mb-8">
                With three years of hands-on experience, I am passionate about
                crafting innovative solutions to complex technological
                challenges. My journey in the world of software development has
                been marked by a commitment to excellence, a thirst for
                continuous learning, and a knack for turning ideas into
                tangible, efficient, and scalable software products.
              </p>
              <div className="space-y-5 lg:space-x-5 sm:mx-4 mb-4 loading-lazy">
                <button
                  onClick={scrollToAbout}
                  className="md:inline m-2 lg:my-0 px-8 py-3 font-medium bg-indigo-950 text-white text-lg rounded-md hover:bg-emerald-800 transiton ease-in-out duration-300"
                >
                  About
                </button>
                {/* 
                <a
                  href="/projects"
                  target="_blank"
                  className=" md:inline md:px-8 p-4 scroll-smooth font-medium text-green-900 text-lg border-2 border-green-800 rounded-md hover:bg-emerald-800 hover:text-white transiton ease-linear duration-300"
                >
                  Projects
                </a> */}
              </div>
              <span className="font-normal text-gray-600 text-sm">
                I am currently not open for full-time work.
              </span>
            </div>

            <div className="mx-auto md:h-96 md:w-96 sm:h-auto sm:w-auto rounded-lg">
              <Image
                className="rounded-2xl shadow-2xl"
                src="/images/photo.jpg"
                alt="Image"
                width={1200}
                height={1200}
                priority
              />
            </div>
          </header>
        </div>
      </div>
    </>
  );
}
