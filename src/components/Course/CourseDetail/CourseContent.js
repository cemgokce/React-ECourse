import React from "react";
import classes from "./CourseContent.module.css";

export default function CourseContent(props) {
  const { contents } = props;
  console.log("Contents", contents);

  return (
    <div className={classes.courseContent}>
      <h2 className={classes.courseContentHeader}>Course Content</h2>
      {contents.map((content) => (
        <span className={classes.courseSingleContent} key={content.content.id}>
          {content.content.name}
        </span>
      ))}
    </div>
  );
}
