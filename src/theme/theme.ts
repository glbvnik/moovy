import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      color: "#152D35",
      fontSize: "40px",
      textAlign: "center",
      marginBottom: "12px",
      "@media (min-width: 900px)": {
        fontSize: "50px",
      },
      "@media (min-width: 1200px)": {
        textAlign: "left",
        marginBottom: "0",
      },
    },
    h2: {
      fontSize: "32px",
      "@media (min-width: 375px)": {
        fontSize: "34px",
      },
      "@media (min-width: 414px)": {
        fontSize: "30px",
      },
      "@media (min-width: 450px)": {
        fontSize: "32px",
      },
      "@media (min-width: 500px)": {
        fontSize: "34px",
      },
      "@media (min-width: 900px)": {
        fontSize: "38px",
      },
      "@media (min-width: 1000px)": {
        fontSize: "46px",
      },
      "@media (min-width: 1200px)": {
        fontSize: "48px",
      },
      "@media (min-width: 2100px)": {
        fontSize: "52px",
      },
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
          "& .MuiFilledInput-root": {
            borderRadius: "0",
          },
          "@media (min-width: 414px)": {
            "& .MuiInputLabel-root, .MuiFilledInput-input": {
              fontSize: "17px",
            },
          },
          "@media (min-width: 900px)": {
            "& .MuiInputLabel-root, .MuiFilledInput-input": {
              fontSize: "18px",
            },
          },
          "@media (min-width: 1500px)": {
            "& .MuiInputLabel-root, .MuiFilledInput-input": {
              fontSize: "19px",
            },
          },
          "@media (min-width: 2100px)": {
            "& .MuiInputLabel-root, .MuiFilledInput-input": {
              fontSize: "20px",
            },
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          padding: "14px 0 20px 0",
          "& .Mui-selected": {
            backgroundColor: "#D4ECDD !important",
          },
          "@media (min-width: 600px)": {
            padding: "20px 0 26px 0",
          },
          "@media (min-width: 1000px)": {
            padding: "28px 0 30px 0",
          },
          "@media (min-width: 1800px)": {
            padding: "32px 0 34px 0",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#345B63",
          "& .MuiSvgIcon-root, path": {
            color: "#D4ECDD !important",
            fontSize: 28,
          },
          "& .MuiButton-root": {
            color: "#D4ECDD !important",
          },
        },
      },
    },
    MuiListItemSecondaryAction: {
      styleOverrides: {
        root: {
          textAlign: "end",
          maxWidth: "80%",
        },
      },
    },
  },
});

export default theme;
