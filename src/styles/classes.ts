import { makeStyles } from "@mui/styles";

export const useClasses = makeStyles({
  wrapper: {
    paddingTop: "30px",
    "@media (min-width: 500px)": {
      padding: "0 40px",
    },
    "@media (min-width: 750px)": {
      padding: "0 60px",
    },
  },
  maxWidth: {
    maxWidth: "1200px",
    "@media (min-width: 2100px)": {
      maxWidth: "1400px",
    },
  },
});
