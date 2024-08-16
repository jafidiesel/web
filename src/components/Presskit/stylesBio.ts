import { StyleSheet } from "aphrodite";

const stylesBio = StyleSheet.create({
  sectionBio: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  cuadrito: {
    padding: "5px",
    width: "98%",
    height: "100vh"
  },

  beta: {
    background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 90%, rgba(0,0,0,1) 100%),",
    backgroundSize: "80vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  bioContent: {
    width: "45%",
    textAlign: "right"
  },
  photoContainer: {
    display: "inline-block",
    height: "100%",
    width: "45%"
  },
  photoBio: {
    height: "600px"
  },
  gradientEffect: {
    maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
    WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"
  }
});

export default stylesBio;
