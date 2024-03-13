import React from "react";
import Card from "../Card/Card";
import { css } from "aphrodite";
import styles from "./styles";
import { coursesData } from "./data";

const Courses = () => {
  const { courses } = coursesData;
  if (!courses.length) return <></>;
  return (
    <div>
      <Card>
        <h2 className={css(styles.title)}>Courses</h2>
        {courses.map((course, index) => {
          return (
            <h6 key={"course" + index}>
              <span className={css(styles.subTitleRole)}>{course.title + ": "}</span>

              {course.link ? (
                <small>
                  <a href={course.link} target="_blank" rel="noreferrer">
                    {course.platform}
                  </a>
                </small>
              ) : (
                <small>{course.platform}</small>
              )}
            </h6>
          );
        })}
      </Card>
    </div>
  );
};

export default Courses;
