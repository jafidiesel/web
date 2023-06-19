import { StyleSheet } from "aphrodite";
const colors = {
  A0: "#0D1B2A",
  A1: "#1B263B",
  A2: "#415A77",
  A3: "#778DA9",
  A4: "#E0E1DD"
};

const styles = StyleSheet.create({
  body: {
    background: `linear-gradient(90deg, ${colors.A2} 25%, ${colors.A3} 50%, ${colors.A4} 75%)`,
    backgroundRepeat: "repeat",
    transition: "opacity 0.25s",
    transitionDelay: "0s",
    minHeight: "100vh",

    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  outerCard: {
    backgroundColor: colors.A0,
    transition: "opacity 1s ease-out, transform 0.75s ease-out",
    boxShadow: "0 2rem 4rem 0.25rem rgba(46, 43, 55, 0.575)",
    borderRadius: "5px",
    height: 520,
    width: 700,
    "@media (max-width: 991px)": {
      width: "100%",
      maxWidth: 500,
      height: "100%",
      margin: 15
    }
  },
  innerCard: {
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 991px)": {
      flexDirection: "column"
    }
  },
  verticalBanner: {
    height: 520,
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
    display: "block",
    "@media (max-width: 991px)": {
      display: "none"
    }
  },
  horizontalBanner: {
    display: "none",
    width: "100%",
    /* height: 150, */
    maxHeight: 270,
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    "@media (max-width: 991px)": {
      display: "block"
    }
  },
  outerTextBody: {
    color: colors.A4
  },
  innerTextBody: {
    padding: 15
  },
  link: {
    textDecoration: "underline",
    color: colors.A3,
    ":hover": {
      color: colors.A4
    }
  }
});

export default styles;
