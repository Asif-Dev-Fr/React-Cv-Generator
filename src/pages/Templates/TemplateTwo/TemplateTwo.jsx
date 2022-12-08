import React, { useState } from "react";
import "./templateTwo.css";
import * as dataCv from "../../../assets/data/myData.json";
import T2Header from "./components/T2Header";
import T2Left from "./components/T2Left";

const TemplateTwo = ({ userLanguage, changeLanguage }) => {
  const [data] = useState(dataCv);
  const [id] = useState("templateOne");
  return (
    <div className="containerTwo" id="templateTwo">
      <T2Header data={data} userLanguage={userLanguage} />
      <T2Left data={data} userLanguage={userLanguage} />
    </div>
  );
};

export default TemplateTwo;
