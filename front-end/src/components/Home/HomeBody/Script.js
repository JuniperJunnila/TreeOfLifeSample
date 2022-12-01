import React, { useState } from "react";
import "./Style.css";

export default function HomeBody() {
  const [statementState, setStatementState] = useState([
    `Tree of Life Learning Center is a private, family-owned, developmentally-based Jewish preschool. We are located across from the Sycamore Valley Park and Sycamore Valley Elementary School. Our school is surrounded by the beautiful, lush rolling hills of Danville. We offer full-day, part-day, and school-day programs for children ages 2 – 5 years-old.`,
    `We believe that small student-teacher ratios allow us to better meet the needs of the children in our care. This also allows us to support children that may need extra guidance, while also supporting the children that may need more of a challenge. We strive to keep a six to one student-teacher ratio in the 2 year-old program, an eight to one ratio in the 3 year-old program and a nine to one ratio in the Pre-K program. We are a year round school; open Monday through Friday from 7:00am to 6:00pm with the exception of major holidays and a spring and winter break. We celebrate both Jewish and American holidays. We welcome and celebrate children from all religions and backgrounds and work with our families to ensure that all family traditions are respected and valued.`,
    `As a school, we value the process of learning, exploration and discovery. We want every child to gain a love of learning in their time here. We view families as a valued part of our community and a necessary part of growth and development. We strive to help our children establish a strong sense of community and social responsibility.`,
    `Send us an email to schedule a tour of our wonderful school!!! We look forward to meeting you and your beautiful children. `,
  ]);

  function setStSt(string) {
    setStatementState(string);
  }

  return (
    <div className="container-fluid d-flex bg-light">
      <div className="m-3">
        <h1>welcome</h1>
      </div>
      <div className="m-3">
        <div className="border border-info">
          <h2></h2>
          <p></p>
        </div>
      </div>
      <div className="m-3">
        <div className="border border-info">
          <h2></h2>
          <p></p>
        </div>
      </div>
      <div className="m-3">
        {/* {statementState.forEach((paragraph) => {
          <p>{paragraph}</p>;
        })} */}
      <p>{statementState}</p>
      </div>
    </div>
  );
}
