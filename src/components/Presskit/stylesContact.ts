import { StyleSheet } from "aphrodite";

const stylesContact = StyleSheet.create({
  sectionContact: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  contactContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "25px",
    width: "50vw"
  },
  contactBLock: {
    textAlign: "center",
    margin: "40px 0px"
  },
  spacedTitle: {
    letterSpacing: "10px",
    wordSpacing: "20px",
    margin: "0px"
  },
  contactMail: {
    fontSize: "18px",
    margin: "0px"
  },
  contacMedias: {
    margin: "0px 4px",
    fontSize: "30px",
    color: "#fff"
  },
  socialMedia: {
    display: "flex",

    listStyleType: "none"
  },
  pressPhotosBtn: {
    backgroundColor: "black",
    color: "#fff",
    borderRadius: "30px",
    fontSize: "15px",
    border: "2px solid #fff",
    padding: "6px 10px",
    width: "100%",
    ":hover": {
      backgroundColor: "red"
    }
  },
  spacedButton: {
    letterSpacing: "2px",
    wordSpacing: "3px"
  },
  photoContainer: {
    display: "inline-block",
    height: "100%",
    width: "50vw"
  },
  photoBio: {
    height: "449px"
  },
  gradientEffect: {
    maskImage: "linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
    WebkitMaskImage: "linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"
  }
});

export default stylesContact;
