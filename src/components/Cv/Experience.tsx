import React from "react";
import Card from "../Card/Card";
import { css } from "aphrodite";
import styles from "./styles";
import { experiencesData } from "./data";

const Experience = () => {
  const { experiences } = experiencesData;
  if (!experiences.length) return <></>;
  return (
    <Card>
      <h2 className={css(styles.title)}>Experience</h2>
      {experiences.map((element, index) => {
        return (
          <div key={"time" + index}>
            <small>{element.time}</small>
            <h5 className={css(styles.subTitle)}>
              {element.company + ": "}
              <span className={css(styles.subTitleRole)}>{element.rol}</span>
            </h5>
            {element.descriptions.map((description, index) => (
              <p key={index}>{description}</p>
            ))}
          </div>
        );
      })}
    </Card>
  );
};

export default Experience;
