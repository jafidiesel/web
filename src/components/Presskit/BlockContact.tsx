import React from "react";
import { css } from "aphrodite";
import stylesContact from "./stylesContact";
import jafiFoto03 from "./jafi03.jpg";

const BlockContact = () => {
  return (
    <>
      <div className={css(stylesContact.sectionContact)}>
        <div className={css(stylesContact.contactContent)}>
          <div className={css(stylesContact.contactBLock)}>
            <p className={css(stylesContact.spacedTitle)}>BOOKING CONTACT</p>
            <p className={css(stylesContact.contactMail)}>jafibravin@gmail.com</p>
          </div>

          <div className={css(stylesContact.contactBLock)}>
            <p className={css(stylesContact.spacedTitle)}>SOCIAL MEDIA</p>
            <ul className={css(stylesContact.socialMedia)}>
              <li className={css(stylesContact.contacMedias)}>☁️</li>
              <li className={css(stylesContact.contacMedias)}>📷</li>
              <li className={css(stylesContact.contacMedias)}>📶</li>
              <li className={css(stylesContact.contacMedias)}>▶️</li>
              <li className={css(stylesContact.contacMedias)}>✉️</li>
            </ul>
          </div>

          <div className={css(stylesContact.contactBLock)}>
            <div className={css(stylesContact.spacedButton, stylesContact.pressPhotosBtn)}>
              PRESS PHOTOS - GRAPHIC ASSETS
            </div>
          </div>
        </div>

        <div className={css(stylesContact.photoContainer)}>
          <img src={jafiFoto03} className={css(stylesContact.photoBio)} />
        </div>
      </div>
    </>
  );
};

export default BlockContact;
