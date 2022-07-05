import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import AOS from "aos";
import { useEffect } from "react";

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
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          // data-aos="fade-out"
          // data-aos-anchor-placement="top-top"
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
            ></div>
            <div className="mypicborder"></div>
            <div className="aboutheader">
              <h2>About</h2>
            </div>
            <p>
              Hey, I am Inga, 29 years old and a recent graduate of the 5th Code
              & Design Camp of DevHaus Leipzig. Before I was half student half
              musician and producer. Corona has changed the lives of many people
              and mine as well. In summer 2019 I decided to give up my studies
              of musicology to focus on making music. During the pandemic my
              plan failed and I felt the urge to learn something completely new.
              And it seems like I did.. what you’re looking at is my first
              website.
            </p>
            <p>I'm currently looking for jobs. Feel free to contact me!</p>
            <div className="flex-container">
              <button>Contact me</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
