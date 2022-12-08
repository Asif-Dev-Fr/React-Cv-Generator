import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  // Methods
  const createDataFile = () => {
    let objOfData = {
      name,
    };
    let fileData = JSON.stringify(objOfData);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "filename.json";
    link.href = url;
    link.click();
  };
  return (
    <div>
      <form onSubmit={createDataFile}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <button type="submit"> Submit form </button>
      </form>
    </div>
  );
};

export default Form;
