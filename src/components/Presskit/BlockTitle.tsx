import React from "react";
import { css } from "aphrodite";
import stylesTitle from "./stylesTitle";
import jafiFoto01 from "./jafi01.jpg";

const BlockTitle = () => {
  return (
    <>
      <div className={css(stylesTitle.sectionTitle)}>
        <div className={css(stylesTitle.titleTextContainer)}>
          <p className={css(stylesTitle.nameDJ)}>EL JAFI DJ</p>
          <p className={css(stylesTitle.presskitOut)}>
            [<span className={css(stylesTitle.presskitIn)}>PRESSKIT</span>]
          </p>
        </div>

        <div className={css(stylesTitle.photoContainer)}>
          <img src={jafiFoto01} className={css(stylesTitle.photoBio)} />
        </div>
      </div>
    </>
  );
};

export default BlockTitle;