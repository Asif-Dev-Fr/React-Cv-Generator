import React from "react";
import { displayContent } from "../../../../utils";

const T1WorkExperience = ({ data, userLanguage }) => {
  // Methods

  return (
    <div className="workExpriences">
      <div className="workExperiencesBox">
        <h3>Work experience</h3>
        <div>
          {Object.entries(data.workExperience).map((info, key) => (
            <div
              key={"workExperienceList_" + key}
              className="workExperienceList"
            >
              <div className="positionName">
                {displayContent(
                  userLanguage,
                  info[1].positionName_EN,
                  info[1].positionName_FR,
                  info[1].positionName_JP
                )}
              </div>
              <div className="companyName"> {info[1].companyName} </div>
              <div className="place_date">
                <div className="date">
                  <span> {info[1].startDate} </span>
                  {info[1].endDate && (
                    <>
                      <span> - </span> <span> {info[1].endDate} </span>
                    </>
                  )}
                </div>
                <div className="place">{info[1].location}</div>
              </div>

              <div
                className="description"
                dangerouslySetInnerHTML={{
                  __html: displayContent(
                    userLanguage,
                    info[1].description_EN,
                    info[1].description_FR,
                    info[1].description_JP
                  ),
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default T1WorkExperience;
