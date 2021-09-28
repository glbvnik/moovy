export const styles = {
  searchBar: {
    backgroundColor: "#D4ECDD",
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
    paddingTop: "30px !important",
    "@media (min-width: 500px)": {
      marginBottom: "30px",
    },
    "@media (min-width: 1200px)": {
      paddingTop: "80px !important",
    },
    "@media (min-width: 1800px)": {
      marginBottom: "40px",
    },
    "@media (min-width: 2100px)": {
      marginBottom: "50px",
    },
  },
  titleInput: {
    "& .MuiFilledInput-root": {
      borderTopLeftRadius: "12px",
      borderTopRightRadius: "12px",
      "@media (min-width: 600px)": {
        borderTopRightRadius: 0,
      },
    },
  },
  yearInput: {
    "@media (min-width: 600px)": {
      "& .MuiFilledInput-root": {
        borderLeft: "solid 1px rgba(0, 0, 0, 0.42)",
        borderTopRightRadius: "12px",
      },
    },
    "@media (min-width: 900px)": {
      "& .MuiFilledInput-root": {
        borderTopRightRadius: 0,
      },
    },
  },
  buttonGroup: {
    height: "56px",
    width: "100%",
    "& .MuiButton-root": {
      borderRadius: 0,
      color: "#D4ECDD !important",
      flex: 1,
    },
  },
  searchBtn: {
    borderBottomLeftRadius: "12px !important",
    "@media (min-width: 900px)": {
      borderBottomLeftRadius: "0 !important",
    },
  },
  resetBtn: { borderBottomRightRadius: "12px !important" },
};
