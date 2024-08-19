import { StyleSheet } from "aphrodite";

const stylesContact = StyleSheet.create({
  titleTextContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
    left: "12.5%",
    top: "50%",
    zIndex: 50
  },
  sectionTitle: {
    width: "100vw",
    height: "110vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: "-50px",
    position: "relative"
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
    height: "100%",
    zIndex: 10
  },
  gradientEffect: {
    maskImage: "radial-gradient(circle, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3))",
    WebkitMaskImage: "radial-gradient(circle, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3)"
  }
});

export default stylesContact;
