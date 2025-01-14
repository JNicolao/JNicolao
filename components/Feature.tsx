import Image from "next/image";
import React from "react";

interface ChipProps {
  bgColor: string;
  textColor: string;
  text: string;
}

const Chip: React.FC<ChipProps> = ({ bgColor, textColor, text }) => (
  <div className={`chip ${bgColor}`}>
    <div className={`chip-text ${textColor}`}>{text}</div>
  </div>
);

interface SectionProps {
  title: string;
  description: string;
}

const Section: React.FC<SectionProps> = ({ title, description }) => (
  <section className="bg-gray-50 px-10 py-10 rounded-md">
    <h1 className="font-semibold text-gray-700 text-lg mb-5">{title}</h1>
    <p className="font-normal text-gray-500 text-md mb-4">{description}</p>
  </section>
);

interface SectionWithIconProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SectionWithIcon: React.FC<SectionWithIconProps> = ({ icon, title, description }) => (
  <section className="bg-gray-50 px-8 py-6 shadow rounded-lg text-center">
    <div className="w-12 py-3 flex justify-center mx-auto rounded-md mb-3">
      {icon}
    </div>
    <h1 className="font-semibold text-gray-700 text-lg mb-3">{title}</h1>
    <p className="font-normal text-gray-500 text-md">{description}</p>
  </section>
);

const Feature = () => {
  const chips = [
    { bgColor: "bg-[#f1e05a]", textColor: "text-black", text: "JavaScript" },
    { bgColor: "bg-[#61dafb]", textColor: "text-black", text: "React" },
    { bgColor: "bg-[#000000]", textColor: "text-white", text: "Next.js" },
    { bgColor: "bg-[#e34c26]", textColor: "text-black", text: "Python" },
    { bgColor: "bg-[#764ABC]", textColor: "text-white", text: "TailwindCSS" },
    { bgColor: "bg-[#41b883]", textColor: "text-black", text: "Node.js" },
    { bgColor: "bg-[#24282f]", textColor: "text-white", text: "Git" },
    { bgColor: "bg-[#e10098]", textColor: "text-white", text: "MySQL" },
    { bgColor: "bg-[#2b7489]", textColor: "text-white", text: "TypeScript" },
    { bgColor: "bg-[#563D7C]", textColor: "text-white", text: "C" },
    { bgColor: "bg-[#002700]", textColor: "text-white", text: "Docker" },
    { bgColor: "bg-[#61dafb]", textColor: "text-black", text: "Linux" },
    { bgColor: "bg-[#764ABC]", textColor: "text-white", text: "MongoDB" },
    { bgColor: "bg-[#00B4AB]", textColor: "text-black", text: "Figma" },
  ];

  const sections = [
    {
      title: "Clean Code",
      description:
        "From designing elegant user interfaces to optimizing database performance, I thrive on turning ideas into reality through the power of clean code. My code is free from unnecessary complexity and clutter, with a meaningful, clear structure, and logic.",
    },
    {
      title: "Approach",
      description:
        "I am a firm believer in the power of collaboration and continuous learning. I love working with cross-functional teams where diverse perspectives come together to create exceptional software. I approach each project with curiosity and a commitment to delivering high-quality results.",
    },
    {
      title: "Drive",
      description:
        "I am fascinated by the endless possibilities that technology offers to solve real-world problems. Whether it's creating user-friendly applications or optimizing backend processes, I am driven by a passion for excellence and a desire to make a positive impact through my work.",
    },
  ];

  const sectionsWithIcons = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="m8.468 8.395-.002.001-.003.002Zm9.954-.187a1.237 1.237 0 0 0-.23-.175 1 1 0 0 0-1.4.411 5.782 5.782 0 0 1-1.398 1.778 8.664 8.664 0 0 0 .134-1.51 8.714 8.714 0 0 0-4.4-7.582 1 1 0 0 0-1.492.806 7.017 7.017 0 0 1-2.471 4.942l-.23.187a8.513 8.513 0 0 0-1.988 1.863 8.983 8.983 0 0 0 3.656 13.908 1 1 0 0 0 1.377-.926 1.05 1.05 0 0 0-.05-.312 6.977 6.977 0 0 1-.19-2.581 9.004 9.004 0 0 0 4.313 4.016.997.997 0 0 0 .715.038 8.995 8.995 0 0 0 3.654-14.863Zm-3.905 12.831a6.964 6.964 0 0 1-3.577-4.402 8.908 8.908 0 0 1-.18-.964 1 1 0 0 0-.799-.845.982.982 0 0 0-.191-.018 1 1 0 0 0-.867.5 8.959 8.959 0 0 0-1.205 4.718 6.985 6.985 0 0 1-1.176-9.868 6.555 6.555 0 0 1 1.562-1.458.745.745 0 0 0 .075-.055s.296-.245.306-.25a8.968 8.968 0 0 0 2.9-4.633 6.736 6.736 0 0 1 1.385 8.088 1 1 0 0 0 1.184 1.418 7.856 7.856 0 0 0 3.862-2.688 7 7 0 0 1-3.279 10.457Z"></path>
        </svg>
      ),
      title: "High experience",
      description:
        "My expertise extends across Web development and Software development, and my commitment to staying at the forefront of technological advancements fuels my drive for continuous improvement.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M20.47,7.37s0,0,0-.08l-.06-.15a.71.71,0,0,0-.07-.09.94.94,0,0,0-.09-.12l-.09-.07L20,6.78l-7.5-4.63a1,1,0,0,0-1.06,0L4,6.78l-.09.08-.09.07a.94.94,0,0,0-.09.12.71.71,0,0,0-.07.09l-.06.15s0,0,0,.08a1.15,1.15,0,0,0,0,.26v8.74a1,1,0,0,0,.47.85l7.5,4.63h0a.47.47,0,0,0,.15.06s.05,0,.08,0a.86.86,0,0,0,.52,0s.05,0,.08,0a.47.47,0,0,0,.15-.06h0L20,17.22a1,1,0,0,0,.47-.85V7.63A1.15,1.15,0,0,0,20.47,7.37ZM11,19.21l-5.5-3.4V9.43L11,12.82Zm1-8.12L6.4,7.63,12,4.18l5.6,3.45Zm6.5,4.72L13,19.21V12.82l5.5-3.39Z"></path>
        </svg>
      ),
      title: "Useful sandboxes",
      description:
        "From designing robust applications to optimizing system performance, I thrive in turning intricate ideas into seamless, user-centric experiences.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"></path>
        </svg>
      ),
      title: "Success side projects",
      description:
        "Eager to contribute my skills to projects that push the boundaries of what's possible, I am dedicated to creating software that not only meets but exceeds expectations.",
    },
  ];

  return (
    <div id="about" className="bg-violet-100">
      <section className="py-8">
        <div className="flex flex-wrap justify-center font-mono">
          {chips.map((chip, index) => (
            <Chip key={index} {...chip} />
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 pb-8 mx-5">
        {sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>

      <section className="overflow-hidden bg-violet-50 sm:grid rounded mx-8 my-5 sm:grid-cols-2">
        <aside>
          <Image
            alt="Portfolio Projects"
            src="/images/projects.jpg"
            className="h-56 w-full object-cover sm:h-full"
            width={332}
            height={444}
          />
        </aside>
        <aside className="p-6 md:p-8 lg:px-12 lg:py-12">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <div>
              <span className="whitespace-nowrap rounded-full mx-1 bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                Portfolio
              </span>
              <span className="whitespace-nowrap rounded-full mx-1 bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                JavaScript
              </span>
            </div>
            <h1 className="text-xl font-medium text-black my-4 2xl:text-2xl">
              In the ever-evolving landscape of technology, I bring a{" "}
              <strong>creative</strong> and <strong>analytical</strong> mindset
              to every project, focusing on delivering high-quality solutions.
            </h1>

            <figure className="max-w-screen-md mx-auto text-center">
              <svg
                className="w-3 h-3 mx-auto mb-2 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <blockquote>
                <p className="text-lg italic font-semibold text-gray-900">
                  You will love whatever you pour your heart into. Passion
                  follows commitment.
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-3 space-x-3 rtl:space-x-reverse">
                <Image
                  className="w-5 h-5 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                  width={20}
                  height={20}
                />
                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                  <cite className="pe-3 font-medium text-sm text-gray-900">
                    James Clear
                  </cite>
                  <cite className="ps-3 text-sm text-gray-600">
                    Author, Atomic Habits
                  </cite>
                </div>
              </figcaption>
            </figure>

            {/* <div className="mt-4 md:mt-8">
              <a
                href="/projects"
                target="blank"
                className="inline-block rounded bg-green-700 px-12 py-3 font-medium text-white transition hover:bg-emerald-800 focus:outline-none focus:ring focus:ring-green-700"
              >
                View Projects
              </a>
            </div> */}
          </div>
        </aside>
      </section>

      <section>
        <div className="container max-w-screen-xl mx-auto p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center">
            {sectionsWithIcons.map((section, index) => (
              <SectionWithIcon key={index} {...section} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
