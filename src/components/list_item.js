import React from "react";
import { Link } from "react-router-dom";

export default props => {
  console.log("list item props: ", props);
  return (
    <li className="list-group-item">
      <Link to={`/item/${props._id}`}>{props.title}</Link>
    </li>
  );
};
