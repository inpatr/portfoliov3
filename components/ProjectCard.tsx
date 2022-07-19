import { useEffect, useState } from "react";
import AOS from "aos";
import Image from "next/image";

type Props = {
  side: string;
  header: string;
  content: string;
  src: string;
};

const ProjectCard = ({ side, header, content, src }: Props) => {
  const [img, setImg] = useState("imagecontainer-left");
  const [card, setCard] = useState("card-left");
  const [fade, setFade] = useState("");

  // const [heading, setHeading] = useState("");
  // const [inhalt, setInhalt] = useState("");

  let oppositeFade = "";

  useEffect(() => {
    AOS.init();
    setImg(`imagecontainer-${side}`);
    setCard(`card-${side}`);
    setFade(`fade-up-${side}`);
    // setHeading(header);
    // setInhalt(content);
  }, [side]);

  if (side === "left") {
    oppositeFade = "fade-right";
  } else {
    oppositeFade = "fade-left";
  }

  return (
    <div className="projectcontainer">
      <div className="cardcontainer">
        <div
          className={img}
          data-aos={oppositeFade}
          data-aos-anchor-placement="bottom-bottom"
          data-aos-easing="ease-in"
        >
          <Image src={src} layout="fill" alt={header} className={img} />
        </div>
        <div
          className={card}
          data-aos={fade}
          data-aos-offset="100"
          data-aos-easing="ease-in"
        >
          <div className="alter-h">
            <p>{header}</p>
            <p>-------</p>
          </div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
