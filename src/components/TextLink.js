import React from "react";
import { Link } from "react-router-dom";

export default function Component(props) {
  return (
    <Link to={props.to}>
      <span className="text-link">{props.text}</span>
    </Link>
  );
}
