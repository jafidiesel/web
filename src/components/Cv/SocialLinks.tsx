import React from "react";
import Card from "../Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from "aphrodite";
import styles from "./styles";
import { socialLinks } from "../../data";

const SocialLinks = () => {
  if (!socialLinks.length) return <></>;
  return (
    <Card className={css(styles.linkSection)}>
      {socialLinks.map((element, index) => {
        return (
          <a
            className={css(styles.linkIcon)}
            href={element.link}
            target="_blank"
            rel="noopener noreferrer"
            key={"link-" + index}
          >
            {element.text}
            <FontAwesomeIcon icon={element.icon} />
          </a>
        );
      })}
    </Card>
  );
};

export default SocialLinks;
