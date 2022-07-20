type Props = {
  header: string;
  content: string;
  img: string;
};

const SmallCard = ({ header, content, img }: Props) => {
  return (
    <div className="smallcard-container">
      <div className="smallcard">
        <div className="alter-h">
          <p>{header}</p>
          <p>-------</p>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SmallCard;
