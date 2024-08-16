import React from "react";
import { css } from "aphrodite";
import styles from "./styles";
import BlockTitle from "./BlockTitle";
import BlockBio from "./BlockBio";
import BlockContact from "./BlockContact";

const Presskit = () => {
  return (
    <main className={css(styles.body)}>
      <BlockTitle />
      <BlockBio />
      <BlockContact />
    </main>
  );
};

export default Presskit;
