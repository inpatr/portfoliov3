type Props = {
  imgclass: string;
  cardclass: string;
  header: string;
  content: string;
};

const ProjectCard = ({ imgclass, cardclass, header, content }: Props) => {
  return (
    <div className="projectcontainer">
      <div className="cardcontainer">
        <div className={imgclass}></div>
        <div className={cardclass}>
          <div className="alter-h">
            <p>{header}</p>
            <p>--------</p>
          </div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
