"use client";
import Image from "@/next/image";
import { BsMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";

const data = [
  {
    title: "iLearn",
    link: "https://ilearn-sq012-node.netlify.app/",
    image: "/ilearn.png",
    Technologies: [
      "Nodejs",
      "Typescript",
      "ExpressJs",
      "Postgres",
      "React",
    ],
  },
  {
    title: "Swift rider",
    link: "https://swift-rider.netlify.app/",
    image: "/swiftrider.png",
    Technologies: ["Nodejs", "Typescript", "ExpressJs", "Postgres", "React"],
  },
  {
    title: "Promptopia",
    link: "",
    image: "/promptopia.png",
    Technologies: ["Nextjs", "Tailwind css"],
  },
  {
    title: "Movie App",
    link: "https://movie-app-ww6o-hy2tm5oay-zeen-at.vercel.app/",
    image: "/movie.png",
    Technologies: ["React", "Redux", "Sass"],
  },
  {
    title: "Nike-ey Landing Page",
    link: "https://nike-ey.vercel.app/",
    image: "/nikey.png",
    Technologies: ["React-Vite", "Tailwind"],
  },
  {
    title: "Weather App",
    link: "https://weather-app-nine-henna-83.vercel.app/",
    image: "/weather_app.png",
    Technologies: ["React", "Tailwind", "Context Api"],
  },
  // {
  //   title: "Haya Closet",
  //   link: "",
  //   image: "",
  //   Technologies: ["HTML", "CSS", "Bootstrap"]
  // }
];

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-gray-200">
            <div className="text-xl font-burtons">
              <Image
                src="/avatarrrr.png"
                width={100}
                alt="avatar"
                height={100}
              />
            </div>
            <ul className="flex items-center">
              <li className="cursor-pointer 2xl">
                <BsMoonStarsFill onClick={() => setDarkMode(!darkMode)} />
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1h8SOQCkneFJrgPZQZbTxqn2RogGwLKv1/view?usp=sharing"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 dark:bg-white-900">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">
              Zinat Sanni
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Software Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
              A seasoned developer with extensive experience in both frontend
              and backend development, I possess expertise in crafting and
              implementing web designs, web applications, and user interfaces.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="//github.com/zeen-at">
              <AiFillGithub />
            </a>
            <a href="//linkedin.com/in/zinat-sanni-b36aa7175/">
              <AiFillLinkedin />
            </a>
            <a href="mailto:sannizinat@gmail.com">
              <MdEmail />
            </a>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 text-center dark:text-white">
              Services I Offer
            </h3>
            <Image
              src="/code.jpg"
              alt="coding"
              width={200}
              height={200}
              className="mx-auto py-1"
            />
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              For <span className="text-teal-500">Frontend development</span>, I
              am skilled in various programming languages and tools, including
              Next.js, React.js, JavaScript, TypeScript, Tailwind CSS, Material
              UI, Ant Design, SASS, CSS3 and HTML.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              In the realm of{" "}
              <span className="text-teal-500">Backend development</span>, my
              proficiency extends to Node.js, Express.js, MongoDB, Postgres, and
              Sequelize.
            </p>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Through Agile training and experience, I have gained the skills and mindset to
              thrive in dynamic and fast-paced development environments. I value
              open communication, teamwork, and the ability to pivot when
              necessary to deliver high-quality software that meets user needs
              effectively.
            </p>
          </div>
        </section>
        <section className="py-10">
          <div className="py-2">
            <h3 className="text-3xl py-1 dark:text-gray-200">Portfolio</h3>
          </div>
          <div className="lg: flex flex-wrap gap-20 ">
            {data.map(({ title, image, link, Technologies }) => (
              <Link href={link}>
                <div className="text-center shadow-lg p-10 rounded" key={title}>
                  <h3 className="text-teal-500 text-lg font-medium py-4">
                    {title}
                  </h3>
                  <Image src={image} width={200} height={200} alt={title} />
                  <p className="py-4 text-teal-600">Technologies</p>
                  <ul py>
                    {Technologies.map((item) => (
                      <li
                        key={item}
                        className="text-gray-800 py-1 dark:text-gray-200"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* <section>
        <Link href="www.github.com/zeen-at">whata</Link>
      </section> */}
      </main>
    </div>
  );
};

export default Home;
