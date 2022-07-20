import { NextPage } from "next";
import ProjectCard from "../components/ProjectCard";
import SmallCard from "../components/SmallCard";

const Test: NextPage = () => {
  return (
    <section className="">
      <SmallCard
        img="/finalproject.png"
        header="final project"
        content="the final project of Camp5 was a map based service for gifting,
  sharing and swapping unused items. We’ve build functionalities to
  find those Items on a map, filter and search for specific ones. A
  main part was the complex backend structure, including dynamic
  categories."
      />
    </section>
  );
};

export default Test;
