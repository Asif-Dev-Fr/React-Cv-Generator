import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaBook } from "react-icons/fa";

const T1AdditionalInfo = ({ data }) => {
  return (
    data && (
      <div className="additionalInfo">
        <div className="infoBox">
          <div className="email sameHeight">
            <AiOutlineMail />
            <span> {data.email} </span>
          </div>
          <div className="address sameHeight">
            <BsFillHouseDoorFill />
            <span> {data.address} </span>
          </div>
          <div className="english sameHeight">
            <FaBook />
            <span> {data.english} </span>
          </div>
          <div className="japanese sameHeight">
            <FaBook />
            <span> {data.japanese} </span>
          </div>
          {/* <div className="portfolio sameHeight">
            <CgWebsite />
            <span>
              {" "}
              <a
                href={data.portfolioLink}
                target="_blank"
                rel="noopener  noreferrer"
              >
                Portfolio
              </a>
            </span>
          </div> */}
        </div>
      </div>
    )
  );
};

export default T1AdditionalInfo;
