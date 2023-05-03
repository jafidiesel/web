import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  outter: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
  },
  inner: {
    maxWidth: 600,
    width: "100%",
    minHeight: "100vh",
    height: "100%",
    color: "white",
  },
  /* header */
  headerContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    margin: "48px 0px 24px 0px",
    textAlign: "center",
  },
  profile: {
    maxWidth: 96,
    borderRadius: "50%",
    border: "3px solid gray",
    marginBottom: 8,
  },
  /* social links */
  linksContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 12,
    marginBottom: 24,
  },
  icon: {
    width: 40,
    height: 40,
    padding: 5,
    color: "white",
    transition: "all 0.15s ease-out",
    ":hover": {
      padding: 0,
      transition: "all 0.25s ease-out",
    },
  },
  /* items links */
  itemLinkOutter: {
    marginBottom: 24,
  },
  itemLink: {
    color: "black",
    fontWeight: 600,
    ":hover": {
      textDecoration: "none",
    },
  },
  itemLinkInner: {
    width: "100%",
    backgroundColor: "white",
    padding: "24px 12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  darkIcon: {
    color: "black",
    marginRight: 8,
  },
});

export default styles;
