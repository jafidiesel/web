import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  body: {
    backgroundColor: "black",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
    overflowY: "scroll",
    scrollbarWidth: "none",
    ":webkit-scrollbar": {
      display: "none"
    }
  }
});

export default styles;
