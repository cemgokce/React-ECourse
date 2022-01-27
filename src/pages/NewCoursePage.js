import React, { useState } from "react";
import CourseBasic from "../components/Course/NewCourse/CourseBasic";

function NewCoursePage() {
  const [partone, serPartOne] = useState(true);
  const [partTwo, serPartTwo] = useState(false);
  const [partThree, serPartThree] = useState(false);
  const [partForth, serPartForth] = useState(false);

  return (
    <React.Fragment>
      <CourseBasic />
    </React.Fragment>
  );
}

export default NewCoursePage;
