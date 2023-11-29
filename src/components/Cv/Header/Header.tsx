import React from "react";
import Card from "../../Card/Card";
import { css } from "aphrodite";
import styles from "./styles";
import { header } from "../../../data";

const Header = () => {
  return (
    <Card fluid={true}>
      <div className={css(styles.header)}>
        <div className={css(styles.text)}>
          <h1 className={css(styles.title)}>{header.title}</h1>
          {header.subtitle && <h4 className={css(styles.subTitle)}>{header.subtitle}</h4>}
        </div> 
      </div>
    </Card>
  );
};

export default Header;
