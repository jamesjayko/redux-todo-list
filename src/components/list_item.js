import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions";

const ListItem = props => {
  // console.log("list item props: ", props);
  const handleDelete = () => {
    props.deleteItem(props._id).then(() => {
      console.log("item deleted");
      props.getItems();
    });
  };
  return (
    <li className="list-group-item">
      <Link to={`/item/${props._id}`}>{props.title}</Link>

      <button
        className="float-right btn btn-outline-danger"
        onClick={handleDelete}
      >
        Delete Item
      </button>
    </li>
  );
};

export default connect(null, { deleteItem, getItems })(ListItem);
