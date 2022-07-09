import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import AOS from "aos";
import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import Image from "next/image";

const arrowdown = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="arrow"
    viewBox="0 -1 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {/* <Header /> */}
      <main>
        <section>
          <div className="headline">
            <h1>
              Inga Patricia Traub
              <br />
              ----------
            </h1>
            <div className="portfolio">
              <h3>portfolio</h3>
            </div>
          </div>
        </section>
        <div
          className="scrollhint"
          data-aos="fade-out"
          data-aos-anchor-placement="center-bottom"
          // data-aos-easing="ease-out"
        >
          <p>scroll</p>
          <div className="arrowcontainer">{arrowdown}</div>
        </div>
        <section>
          <div
            className="about"
            // data-aos="fade-left"
            // data-aos-offset="300"
            // data-aos-easing="ease-in-sine"
          >
            <div
              className="mypic"
              data-aos="fade"
              // data-aos-offset="500"
              data-aos-anchor-placement="center-bottom"
              data-aos-easing="ease-in-quad"
            >
              <Image
                src="/../public/static/img/mepic1.jpeg"
                layout="fill"
                className="mypic"
                alt="my profile pic"
              />
            </div>
            <div className="mypicborder"></div>
            <div className="aboutheader">
              <h2>About</h2>
            </div>
            <p>
              <ul className="facts">
                <li>- born in &apos;93</li>
                <li>- based in Leipzig</li>
                <li>- frontend web developer</li>
                <li>
                  - graduate of the 5th Code & Design Camp of DevHaus Leipzig
                </li>
                <li>- singer & producer of electronic music</li>
                <li>- love for non-violent video games</li>
              </ul>
            </p>
            <p>I&apos;m currently looking for jobs. Feel free to contact me!</p>
            <div className="flex-container">
              <a href="mailto:i.traub@posteo.de">
                <button>Contact me</button>
              </a>
            </div>
          </div>
        </section>
        <h3 className="projectsheader">projects</h3>
        <section className="projects">
          <ProjectCard
            src="/../public/static/img/finalproject.png"
            side="left"
            header="final project"
            content="the final project of Camp5 was a map based service for gifting,
              sharing and swapping unused items. We’ve build functionalities to
              find those Items on a map, filter and search for specific ones. A
              main part was the com-plex backend structure, including dynamic
              categories."
          />
          <ProjectCard
            src="/../public/static/img/garden_share2.png"
            side="right"
            header="garden share"
            content="this project was our first fullstack app. Inspired by the local Schrebergarten culture, we’ve build a calendar and a booking mechanism which included tasks and other options to specify the stay and make it easier for a group to maintain their garden."
          />
        </section>
      </main>
    </div>
  );
};

export default Home;
