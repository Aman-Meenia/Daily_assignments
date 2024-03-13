import React from "react";

export const Displaydata = ({ data }) => {
  return (
    // form to display data

    <div>
      <h3>Name is {data.Name}</h3>
      <h3>Email is {data.Email}</h3>
      <h3>ContactNo is {data.ContactNo}</h3>
      <h3>Age is {data.Age}</h3>
    </div>
  );
};
