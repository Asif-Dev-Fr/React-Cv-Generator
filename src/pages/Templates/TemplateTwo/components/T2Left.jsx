import React from "react";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { AiOutlineMail, AiFillCar } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { displayContent } from "../../../../utils";

const T2Left = ({ data, userLanguage }) => {
  return (
    <div className="left">
      <div className="leftBox">
        <div className="generalInfo">
          <div className="email sameHeight">
            <AiOutlineMail />
            <span> {data.email} </span>
          </div>
          <div className="github sameHeight">
            <BsGithub />
            <span>
              <a
                href={data.githubLink}
                target="_blank"
                rel="noopener  noreferrer"
              >
                {" "}
                {data.githubName}
              </a>
            </span>
          </div>
          <div className="linkedIn sameHeight">
            <BsLinkedin />
            <span>
              <a
                href={data.linkedInLink}
                target="_blank"
                rel="noopener  noreferrer"
              >
                {" "}
                {data.linkedInName}
              </a>
            </span>
          </div>
          <div className="address sameHeight">
            <BsFillHouseDoorFill />
            <span> {data.address} </span>
          </div>
          <div className="license sameHeight">
            <AiFillCar />
            <span> {data.licence} </span>
          </div>
        </div>

        <div className="educationalBackground">
          <div className="diplomaBoxTitle">Diploma</div>
          {Object.entries(data.educationalBackground).map((el, key) => (
            <div
              key={"educationalBackground_" + key}
              className="educationalBackgroundList"
            >
              <div className="diplomaName">
                {displayContent(
                  userLanguage,
                  el[1].title_EN,
                  el[1].title_FR,
                  el[1].title_JP
                )}
              </div>
              <div className="schoolName"> {el[1].schoolName} </div>
              <div className="place"> {el[1].place} </div>
              <div className="date">
                {el[1].startDate}
                {el[1].endDate && (
                  <>
                    <span> - </span> <span> {el[1].endDate} </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="languages">
          <div className="languagesTitle"> Languages </div>
          <div className="english sameHeight">
            <FaBook />
            <span> {data.english} </span>
          </div>
          <div className="japanese sameHeight">
            <FaBook />
            <span> {data.japanese} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default T2Left;
