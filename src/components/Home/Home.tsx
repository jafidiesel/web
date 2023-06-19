import React from "react";
import styles from "./styles";
import { css } from "aphrodite";
import verticalBanner from "../../assets/img/vertical-banner.png";
import horizontalBanner from "../../assets/img/horizontal-banner.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={css(styles.body)}>
      <div className={css(styles.outerCard)}>
        <div className={css(styles.innerCard)}>
          <img src={verticalBanner} className={css(styles.verticalBanner)} alt="jafi banner" />
          <img src={horizontalBanner} className={css(styles.horizontalBanner)} alt="jafi banner" />
          <div className={css(styles.outerTextBody)}>
            <div className={css(styles.innerTextBody)}>
              <p>Hi! I'm Jafi Bravin.</p>
              <p>
                If you're interested in my developer CV you can{" "}
                <Link to="/cv" className={css(styles.link)}>
                  check it here
                </Link>
                .
              </p>
              <p>
                If you're here for my DJ mixes you can{" "}
                <Link to="/music" className={css(styles.link)}>
                  check them here
                </Link>
                .
              </p>
              <br></br>
              <p>Thanks and great journey!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
