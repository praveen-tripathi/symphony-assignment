import React, { useState } from "react";
import Table from "../components/Table";
import UploadButton from "../components/UploadButton";
import Filters from "../components/Filters";

const MainContainer = () => {
  const [fileData, setFileData] = useState([]);
  const [filters, setFilters] = useState({
    lines: 2,
    delimeter: ",",
  });
  const [selectedFile, setSelectedFile] = useState({});
  const [filteredData, setFilteredData] = useState([]);

  const handleFileChange = (e) => {
    const value = e.target.files[0];
    setSelectedFile(value);
  };

  const handleUploadImage = (ev) => {
    ev.preventDefault();
    const { lines, delimeter } = filters;

    const data = new FormData();
    data.append("file", selectedFile);

    fetch("http://localhost:8000/upload", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((response) => {
        const filteredFileContent = [];

        for (let i = 0; i < lines; i++) {
          let delimeted = response.data[i].toString().split(delimeter);
          delimeted.length > 1 &&
            filteredFileContent.push(
              response.data[i].toString().split(delimeter)
            );
        }

        setFileData(response.data);
        setFilteredData(filteredFileContent);
      });
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    const filterType = e.target.name;

    setFilters({
      ...filters,
      [e.target.name]: value,
    });

    if (filterType === "lines") {
      handleLineChange(value);
    }
    if (filterType === "delimeter") {
      handleDelimeterChange(value);
    }
  };

  const handleDelimeterChange = (value) => {
    const { lines } = filters;
    const content = [];

    if (value && parseInt(lines) <= fileData.length) {
      for (let i = 0; i < lines; i++) {
        let filteredData = fileData[i].toString().split(value);
        filteredData.length > 1 && content.push(filteredData);
      }
      setFilteredData(content);
    }
  };

  const handleLineChange = (value) => {
    const { delimeter } = filters;
    const content = [];

    if (value && parseInt(value) <= fileData.length && delimeter) {
      for (let i = 0; i < value; i++) {
        let filteredData = fileData[i].toString().split(delimeter);
        filteredData.length > 1 && content.push(filteredData);
      }
      setFilteredData(content);
    }
  };

  return (
    <React.Fragment>
      <UploadButton
        onChange={handleFileChange}
        fileUploadHandler={handleUploadImage}
      />
      {fileData.length > 0 && (
        <Filters onChange={handleFilterChange} filterValue={filters} />
      )}
      <Table data={filteredData} />
    </React.Fragment>
  );
};

export default MainContainer;
