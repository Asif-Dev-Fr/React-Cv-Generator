import React from "react";
import { displayContent } from "../../../../utils";

const T1EducationalBackground = ({ data, userLanguage }) => {
  return (
    <div className="educationalBackground">
      <div className="educationalBackgroundBox">
        <h3>Educational Background</h3>
        <div>
          {Object.entries(data.educationalBackground).map((element, key) => (
            <div
              className="educationalBackgroundList"
              key={"educationalBackgroundList_" + key}
            >
              <div className="title">
                {displayContent(
                  userLanguage,
                  element[1].title_EN,
                  element[1].title_FR,
                  element[1].title_JP
                )}
              </div>
              <div className="placeDate">
                <div className="date">
                  <span> {element[1].startDate} </span>
                  {element[1].endDate && (
                    <>
                      <span>-</span> <span> {element[1].endDate} </span>
                    </>
                  )}
                </div>
                <div className="place">
                    { element[1].schoolName }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default T1EducationalBackground;
