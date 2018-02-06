import React from "react";
import PropTypes from "prop-types";

import { Container, Col1 } from "./Layout";
import classNames from "../../styles/components/box.scss";

export const Box = props => (
  <Col1>
    <h4 className="text-overlay">{props.title}</h4>
    <a href={props.path}>
      <div className={props.class} aria-label={props.alt}/>
    </a>
  </Col1>
);

export default Box;