import React from "react";
import { css } from "aphrodite";
import styles from "./styles";
import Header from "./Header";
import { Helmet } from "react-helmet";
import SocialLinks from "./SocialLinks";
import Links from "./Links";

const Dj = () => {
  return (
    <div className={css(styles.outter)}>
      <Helmet>
        <title>Jafi Bravin Music</title>
        <meta name="description" content="Progressive House / Organic House / Melodic House" />
        <meta
          name="keywords"
          content="Dj, djing, progressive house, organic house, mendoza dj, argentina dj, soundcloud, melodic techno, melodic house"
        />
        <meta name="author" content="Jafi Bravin" />
        <meta property="og:url" content="https://jafibravin.com/music" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Jafi Bravin" />
        <meta property="og:image" content="%PUBLIC_URL%/djing_profile.jpg" />
        <meta
          property="og:description"
          content="Progressive House / Organic House / Melodic House"
        />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <div className={css(styles.inner)}>
        <Header />
        <SocialLinks />
        <Links />
      </div>
    </div>
  );
};

export default Dj;
