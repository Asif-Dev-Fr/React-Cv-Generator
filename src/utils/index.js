export const displayContent = (language, eng, fr, jp) => {
  switch (language) {
    case "EN":
      return eng;
    case "FR":
      return fr;
    case "JP":
      return jp;
    default:
      return eng;
  }
};
