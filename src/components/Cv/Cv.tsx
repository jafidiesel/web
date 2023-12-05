import Header from "./Header/Header";
import Projects from "./Projects";
import Experience from "./Experience";
import Courses from "./Courses";
import SocialLinks from "./SocialLinks";
import Skills from "./Skills";
import { css } from "aphrodite";
import styles from "./styles";
import { Helmet } from "react-helmet";

const Cv = () => (
  <div className={css(styles.app)}>
    <Helmet>
      <title>Hi I'm Jafi!</title>
      <meta name="description" content="This is my online resume. Feel free to send me an email." />
      <meta
        name="keywords"
        content="developer, algorand, blockchain, front-end, react developer, freelance, react js"
      />
      <meta name="author" content="Jafi Bravin" />
      <meta property="og:url" content="https://jafibravin.com/cv" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Jafi Bravin" />
      <meta property="og:image" content="%PUBLIC_URL%/profile.jpeg" />
      <meta
        property="og:description"
        content="This is my online resume. Feel free to send me an email."
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@jafidiesel" />

      <link rel="apple-touch-icon" href="%PUBLIC_URL%/profile.jpeg" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

      <link rel="apple-touch-icon" href="%PUBLIC_URL%/profile.jpeg" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    </Helmet>
    <Header />
    <SocialLinks />
    <Skills />
    <Experience />
    <Courses />
    <Projects />
  </div>
);

export default Cv;
