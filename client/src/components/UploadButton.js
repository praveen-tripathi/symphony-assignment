import React from "react";

const UploadButton = ({ onChange, fileUploadHandler }) => {
  return (
    <div className="button-container">
      <div>
        <input type="file" name="file" onChange={onChange} />
      </div>
      <div>
        <button onClick={fileUploadHandler}>Upload</button>
      </div>
    </div>
  );
};

export default UploadButton;
