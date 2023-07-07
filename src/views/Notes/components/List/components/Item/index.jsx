import { Link } from "react-router-dom";
import "./index.css";

const Item = (props) => {
  const { item, onDeleteClick } = props;

  return (
    <li className="item" key={item.id}>
      <div>
        <p className="item__text">{item.title}</p>
        <Link to={`/detail/${item.id}`}>
          <button className="item-button item-button__view" type="button">
            View
          </button>
        </Link>
        <Link to={`/edit/${item.id}`}>
          <button className="item-button item-button__edit" type="button">
            Edit
          </button>
        </Link>
        <button
          className="item-button item-button__delete"
          type="button"
          onClick={(event) => onDeleteClick(event, item.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Item;
