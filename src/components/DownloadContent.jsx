import React from "react";
import html2pdf from "html2pdf.js";

const DownloadContent = ({ id, userLanguage, changeLanguage }) => {
  // Methods
  const downloadFunction = () => {
    let element = document.getElementById(id);

    let title = "";
    switch (userLanguage) {
      case "EN":
        title = "Developer_Fullstack-Kassamali_Asif";
        break;
      case "FR":
        title = "Développeur_Fullstack-Kassamali_Asif";
        break;
      case "JP":
        title = "Developer_Fullstack-Kassamali_Asif_JP";
        break;
      default:
        title = "Developer_Fullstack-Kassamali_Asif";
        break;
    }

    let opt = {
      margin: 0,
      filename: title + ".pdf",
      image: { type: "png" },
      html2canvas: {
        dpi: 300,
        letterRendering: true,
        imageTimeout: 0,
        scale: 2,
        backgroundColor: null,
        windowWidth: 900,
      },
      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait",
        compress: true,
      },
    };

    html2pdf()
      .set(opt)
      .from(element)
      .save()
      .then(() => {
        console.log("Done");
      })
      .catch(function (err) {
        console.error(err);
      });
  };

  const selectLanguage = (language) => {
    changeLanguage(language);
  };

  return (
    <div>
      <button onClick={downloadFunction}> Download CV </button>
      <button onClick={() => selectLanguage("EN")}> ENG </button>
      <button onClick={() => selectLanguage("FR")}> FR </button>
      <button onClick={() => selectLanguage("JP")}> JP </button>
    </div>
  );
};

export default DownloadContent;
