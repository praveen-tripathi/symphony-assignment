import React from "react";

const Table = ({ data }) => {
  return data.length > 0 ? (
    <table>
      <tbody>
        {data.map((rowData, i) => {
          return (
            <tr key={i}>
              {Array.isArray(rowData) &&
                rowData.map((cellData, i) => {
                  return <td key={cellData.split(" ").join()}>{cellData}</td>;
                })}
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : null;
};

export default React.memo(Table);
