import { StyleSheet } from "aphrodite";
import colors from "../../colors";

const styles = StyleSheet.create({
  app: {
    padding: "0px 10%",
    minWidth: 320
  },
  linkSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    "@media (max-width: 460px)": {
      justifyContent: "space-between",
      flexWrap: "wrap",
      alignContent: "stretch",
      width: "100%"
    }
  },
  body: {
    backgroundGolor: colors.first
  },
  linkIcon: {
    fontWeight: 500,
    textDecoration: "none",
    display: "flex",
    gap: 12,
    alignItems: "center",
    "@media (max-width: 768px)": {
      lineHeight: "24px",
      paddingBottom: 12
    }
  },
  title: {
    color: colors.third,
    fontWeight: 600
  },
  subTitle: {
    color: colors.fourth,
    fontWeight: 600
  },
  subTitleRole: {
    fontWeight: 500
  },
  textCenter: {
    textAlign: "center"
  },
  keyWordContainer: {
    display: "flex",
    flexWrap: "wrap"
  },
  keyword: {
    backgroundColor: colors.fourth,
    color: colors.six,
    margin: 4,
    padding: 4,
    borderRadius: 4
  },
  columns: {
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width: 768px)": {
      flexDirection: "column"
    }
  },
  bulletList: {
    marginBottom: 0
  }
});

export default styles;
