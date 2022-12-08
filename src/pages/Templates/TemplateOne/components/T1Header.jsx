import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const T1Header = ({ data }) => {
  return (
    data && (
      <div className="header">
        <div className="left">
          <div className="name">{data.name}</div>
          <div className="jobPosition">{data.jobPosition}</div>
        </div>
        <div className="right">
          <div className="github">
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
          <div className="linkedIn">
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
        </div>
      </div>
    )
  );
};

export default T1Header;
