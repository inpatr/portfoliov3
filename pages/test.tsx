import { NextPage } from "next";
import ProjectCard from "../components/ProjectCard";

const Test: NextPage = () => {
  return (
    <section className="projects">
      <ProjectCard
        imgclass="imagecontainer-left"
        cardclass="card-left"
        header="final project"
        content="the final project of Camp5 was a map based service for gifting,
            sharing and swapping unused items. We’ve build functionalities to
            find those Items on a map, filter and search for specific ones. A
            main part was the com-plex backend structure, including dynamic
            categories."
      />
      <ProjectCard
        imgclass="imagecontainer-right"
        cardclass="card-right"
        header="garden share"
        content="this project was our first fullstack app. Inspired by the local Schrebergarten culture, we’ve build a calendar and a booking mechanism which included tasks and other options to specify the stay and make it easier for a group to maintain their garden."
      />
    </section>
  );
};

export default Test;
