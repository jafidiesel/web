import { css } from "aphrodite";
import React, { Fragment } from "react";
import { skills } from "./data";
import Card from "../Card/Card";
import styles from "./styles";

function Skills() {
  const { hardSkills, softSkill } = skills;
  if (!hardSkills?.list?.length && softSkill?.list?.length) return <></>;
  return (
    <div className={css(styles.columns)}>
      {hardSkills?.list?.length && (
        <Card>
          <>
            <h3 className={css(styles.title)}>{hardSkills.title}</h3>
            <ul className={css(styles.bulletList)}>
              {hardSkills.list.map((skill, index) => (
                <li key={"skill-" + index}>{skill}</li>
              ))}
            </ul>
          </>
        </Card>
      )}
      {softSkill?.list?.length && (
        <Card>
          <>
            <h3 className={css(styles.title)}>{softSkill.title}</h3>
            <ul className={css(styles.bulletList)}>
              {softSkill.list.map((skill, index) => (
                <li key={"soft-" + index}>{skill}</li>
              ))}
            </ul>
          </>
        </Card>
      )}
    </div>
  );
}

export default Skills;
