import React from "react";
import PropTypes from "prop-types";

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

UploadButton.propTypes = {
  onChange: PropTypes.func,
  fileUploadHandler: PropTypes.func,
};

export default UploadButton;
