import React from "react";
import Unconscious from "./Unconscious";
import Conscious from "./Conscious";
import Head from "./Head";
import Center from "./Center";
import Top from "./Top";
import { classNames } from "../../../shared/lib/classNames/classNames";

import { ReactComponent as GraphPerson } from "../assets/graph.svg";

import "./DesignPerson.css";

const DesignPerson = ({ className }) => {
  return (
    <div className={classNames("design-person", [className])}>
      <Top />

      <Head />
      <Center />

      <Unconscious />
      <GraphPerson className="design-person__graph" />
      <Conscious />
    </div>
  );
};

export default DesignPerson;
