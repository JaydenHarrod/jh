import React from "react";
import { Link } from "react-router-dom";
import { Col1 } from "./Layout";
import "../../styles/components/shared/box.scss";

export const Box = props => (
  <Col1>
    <div className="disable-text-on">
      <h1 className="text-overlay">{props.title}</h1>
      <Link to={props.path}>
        <img
          src={props.src}
          className={props.class}
          alt={props.alt}
          aria-label={props.alt}
        />
      </Link>
    </div>
  </Col1>
);

export default Box;
