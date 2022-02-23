import Button from "./Button";
import "./Card.css";

function Card({ value, color, onDelete }) {
  return (
    <div className="Card">
      <p>{`${value} - ${color}`}</p>
      <Button onClick={onDelete} />
    </div>
  );
}

export default Card;
