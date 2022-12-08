import React from "react";
import { displayContent } from "../../../../utils";

const T2Header = ({ data, userLanguage }) => {
  return (
    <div className="header">
      <div className="headerBox">
        <h4> {data.name} </h4>
        <h3>
          {displayContent(
            userLanguage,
            data.jobPosition_EN,
            data.jobPosition_FR,
            data.jobPosition_JP
          )}
        </h3>
      </div>
    </div>
  );
};

export default T2Header;
