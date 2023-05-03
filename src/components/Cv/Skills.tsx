import { css } from "aphrodite";
import React, { Fragment } from "react";
import { skills } from "../../data";
import Card from "../Card/Card";
import styles from "./styles";

function Skills() {
  const { hardSkills, softSkill } = skills;
  if (!hardSkills?.list?.length && softSkill?.list?.length) return <></>;
  return (
    <>
      {hardSkills?.list?.length && (
        <div>
          <Card>
            <>
              <h3 className={css(styles.title)}>{hardSkills.title}</h3>
              <ul>
                {hardSkills.list.map((skill, index) => (
                  <li key={"skill-" + index}>{skill}</li>
                ))}
              </ul>
            </>
          </Card>
        </div>
      )}
      {softSkill?.list?.length && (
        <div>
          <Card>
            <>
              <h3 className={css(styles.title)}>{softSkill.title}</h3>
              <ul>
                {softSkill.list.map((skill, index) => (
                  <li key={"soft-" + index}>{skill}</li>
                ))}
              </ul>
            </>
          </Card>
        </div>
      )}
    </>
  );
}

export default Skills;
