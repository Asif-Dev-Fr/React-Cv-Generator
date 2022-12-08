import React, { useState } from "react";
import "./templateOne.css";
import * as dataCv from "../../../assets/data/myData.json";
import T1Header from "./components/T1Header";
import T1AdditionalInfo from "./components/T1AdditionalInfo";
import T1WorkExperience from "./components/T1WorkExperience";
import T1EducationalBackground from "./components/T1EducationalBackground";
import DownloadContent from "../../../components/DownloadContent";

const TemplateOne = ({ userLanguage, changeLanguage }) => {
  const [data] = useState(dataCv);
  const [id] = useState("templateOne")
  return (
    <div>
      <div className="containerOne" id="templateOne">
        <T1Header data={data} />
        <T1AdditionalInfo data={data}/>
        <T1WorkExperience data={data} userLanguage={userLanguage} />
        <T1EducationalBackground data={data} userLanguage={userLanguage} />
      </div>
      <DownloadContent id={id} userLanguage={userLanguage} changeLanguage={changeLanguage} />
    </div>
  );
};

export default TemplateOne;
