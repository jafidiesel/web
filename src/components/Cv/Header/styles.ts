import { StyleSheet } from "aphrodite";
import colors from "../../../colors";

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  image: {
    maxWidth: 200,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    "@media (max-width: 576px)": {
      maxWidth: 120,
      maxHeight: 120,
    },
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "right",
  },
  title: {
    color: colors.third,
    fontWeight: 600,
  },
  subTitle: {
    color: colors.fourth,
    fontWeight: 600,
  },
});

export default styles;
