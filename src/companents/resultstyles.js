import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  app: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4bd9b",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#7d4052",
    font: {
      size: 40,
      weight: 900,
    },
  },
  span: {
    fontSize: "40px",
    fontWeight: "700",
    color: "#7d4052",
  },
  buttonContainer: {
    display: "flex",
    gap: "20px",
  },
  button: {
    width: "50px",
    height: "50px",
    fontSize:'20px',
    border: "solid 2px #7d4052",
    backgroundColor: "#b15c69",
    borderRadius: "50%",
    color: "#7d4052",
  },
});

export default useStyles;
