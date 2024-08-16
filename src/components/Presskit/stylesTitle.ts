import { StyleSheet } from "aphrodite";

const stylesContact = StyleSheet.create({
  titleTextContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center"
  },
  sectionTitle: {
    width: "100vw",
    height: "120vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  nameDJ: {
    fontSize: "70px",
    margin: "0"
  },
  presskitOut: {
    fontSize: "25px",
    margin: "0"
  },
  presskitIn: {
    fontSize: "15px",
    margin: "0"
  },
  photoBio: {
    width: "auto",
    height: "100%"
  },
  photoContainer: {
    display: "inline-block",
    position: "relative",
    height: "100%"
  },
  gradientEffect: {
    maskImage: "linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
    WebkitMaskImage: "linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"
  }
});

export default stylesContact;
