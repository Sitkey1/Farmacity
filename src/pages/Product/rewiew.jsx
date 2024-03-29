import "./style.scss";

const RewiewCard = ({ rewiew }) => {
  const { name, age } = rewiew.user;
  return (
    <ul className="rewiews-list list-reset">
      <li>
        <div className="head">
          <span>{name}</span>
          <span>{age}</span>
        </div>
        <p>{rewiew.review}</p>
      </li>
    </ul>
  );
};

export default RewiewCard;
