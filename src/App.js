import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import TemplateOne from "./pages/Templates/TemplateOne/TemplateOne";
import Form from "./pages/Form/Form";
import TemplateTwo from "./pages/Templates/TemplateTwo/TemplateTwo";

function App() {
  const [userLanguage, setUserLanguage] = useState("EN");

  // Methods :
  const changeLanguage = (param) => {
    setUserLanguage(param);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/templates/templateOne"
            element={
              <TemplateOne
                userLanguage={userLanguage}
                changeLanguage={changeLanguage}
              />
            }
          />
          <Route path="/form" element={<Form />} />
          <Route
            path="/templates/templateTwo"
            element={
              <TemplateTwo
                userLanguage={userLanguage}
                changeLanguage={changeLanguage}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
