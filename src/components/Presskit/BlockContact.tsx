import React from "react";
import { css } from "aphrodite";
import stylesContact from "./stylesContact";
import jafiFoto03 from "./jafi03.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSoundcloud,
  faInstagram,
  faMixcloud,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const BlockContact = () => {
  return (
    <>
      <div className={css(stylesContact.sectionContact)}>
        <div className={css(stylesContact.contactContent)}>
          <div className={css(stylesContact.contactBLock)}>
            <p className={css(stylesContact.spacedTitle)}>BOOKING CONTACT</p>
            <a className={css(stylesContact.mailStyle)} href="mailto:jafibravin@gmail.com">
              <p className={css(stylesContact.contactMail)}>jafibravin@gmail.com</p>
            </a>
          </div>

          <div className={css(stylesContact.contactBLock)}>
            <p className={css(stylesContact.spacedTitle)}>SOCIAL MEDIA</p>
            <ul className={css(stylesContact.socialMedia)}>
              <li>
                <a
                  href="https://soundcloud.com/jafibravin-music"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="social-link-soundcloud"
                >
                  <FontAwesomeIcon
                    icon={faSoundcloud}
                    className={css(stylesContact.contacMedias)}
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/jafi.dj"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="social-link-instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} className={css(stylesContact.contacMedias)} />
                </a>
              </li>

              <li>
                <a
                  href="https://www.mixcloud.com/jafibravin"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="social-link-mixcloud"
                >
                  <FontAwesomeIcon icon={faMixcloud} className={css(stylesContact.contacMedias)} />
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/channel/UCFufW_kIdr6p5q69sT944tQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="social-link-youtube"
                >
                  <FontAwesomeIcon icon={faYoutube} className={css(stylesContact.contacMedias)} />
                </a>
              </li>

              <li>
                <a
                  href="mailto:jafibravin@gmail.com"
                  aria-label="Jafi Bravin email address"
                  id="social-link-email"
                >
                  <FontAwesomeIcon icon={faEnvelope} className={css(stylesContact.contacMedias)} />
                </a>
              </li>
            </ul>
          </div>

          <div className={css(stylesContact.contactBLock)}>
            <a
              className={css(stylesContact.pressBtnLink)}
              href="https://www.dropbox.com/scl/fo/cgujbd6nyee0mqcjo0ykq/AI-uvnShgSOgkPYV4I8PGwY?rlkey=wxjnh4j7vnq5f1ee97x1koz9q&st=z60qxjp5&dl=0"
            >
              <div className={css(stylesContact.spacedButton, stylesContact.pressPhotosBtn)}>
                PRESS PHOTOS - GRAPHIC ASSETS
              </div>
            </a>
          </div>
        </div>

        <div className={css(stylesContact.photoContainer)}>
          <img
            src={jafiFoto03}
            className={css(stylesContact.photoBio, stylesContact.gradientEffect)}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default BlockContact;
