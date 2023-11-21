import React from "react";
export function Biography(){
const Biography = ({ biography,work,appearance,connections }) => (
    <div>
      <h2>Biography</h2>
      <p>Full Name: {biography['full-name']}</p>
      <p>Alter Egos: {biography['alter-egos']}</p>

      <h3>Work</h3>
      <ul>
        <li>Occupation: {work.occupation}</li>
        <li>Base: {work.base}</li>
      </ul>

     <h4>Appearance</h4>
     <ul>
        <li>Eyecolor: {appearance.eyecolor}</li>
        <li>Haircolor: {appearance.haircolor}</li>
    </ul>

    <h5>Connections</h5>
    <ul>
        <li>Relatives: {connections.relatives}</li>
    </ul>

</div>
  );
}