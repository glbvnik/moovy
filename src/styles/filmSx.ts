export const styles = {
  mobileImage: {
    width: "100vw",
    marginBottom: "4px",
    position: "static",
  },
  image: {
    borderRadius: "12px",
    width: "100%",
    position: "static",
  },
  content: {
    padding: "10px",
  },
  list: {
    "& li": {
      borderBottom: "solid 1px #345B63",
      borderRadius: "3%",
    },
    "& li, span": {
      padding: "4px 0",
      fontSize: "16px",
      "@media (min-width: 414px)": {
        fontSize: "11px",
      },
      "@media (min-width: 428px)": {
        fontSize: "12px",
      },
      "@media (min-width: 450px)": {
        fontSize: "13px",
      },
      "@media (min-width: 470px)": {
        padding: "5px 0",
      },
      "@media (min-width: 520px)": {
        padding: "6px 0",
      },
      "@media (min-width: 540px)": {
        fontSize: "14px",
      },
      "@media (min-width: 750px)": {
        fontSize: "15px",
      },
      "@media (min-width: 900px)": {
        fontSize: "19px",
      },
      "@media (min-width: 1000px)": {
        fontSize: "20px",
      },
      "@media (min-width: 1200px)": {
        fontSize: "16px",
      },
      "@media (min-width: 2100px)": {
        fontSize: "21px",
      },
    },
    "@media (min-width: 414px)": {
      padding: "0 0 0 10px",
    },
    "@media (min-width: 600px)": {
      padding: 0,
    },
  },
  plot: {
    fontSize: "18px",
    lineHeight: 1.5,
    "@media (min-width: 375px)": {
      fontSize: "19px",
      lineHeight: 1.6,
    },
    "@media (min-width: 414px)": {
      padding: "14px 4px",
    },
    "@media (min-width: 500px)": {
      fontSize: "21px",
      lineHeight: 1.8,
    },
    "@media (min-width: 600px)": {
      fontSize: "20px",
      marginTop: "30px",
      padding: 0,
    },
    "@media (min-width: 900px)": {
      fontSize: "22px",
      lineHeight: 1.9,
    },
    "@media (min-width: 1000px)": {
      fontSize: "23px",
      lineHeight: 2,
    },
    "@media (min-width: 2100px)": {
      fontSize: "25px",
    },
  },
  ratingBox: {
    marginTop: "2px",
    marginBottom: "10px",
    "& .MuiRating-icon": {
      fontSize: "30px",
    },
    "@media (min-width: 414px)": {
      marginTop: "4px",
      "& .MuiRating-icon": {
        fontSize: "34px",
      },
    },
    "@media (min-width: 428px)": {
      "& .MuiRating-icon": {
        fontSize: "36px",
      },
    },
    "@media (min-width: 500px)": {
      "& .MuiRating-icon": {
        fontSize: "40px",
      },
    },
    "@media (min-width: 600px)": {
      marginBottom: "16px",
    },
    "@media (min-width: 900px)": {
      marginBottom: "24px",
    },
    "@media (min-width: 1200px)": {
      "& .MuiRating-icon": {
        fontSize: "46px",
      },
    },
    "@media (min-width: 2100px)": {
      "& .MuiRating-icon": {
        fontSize: "52px",
      },
    },
  },
  normalContainer: {
    padding: "10px",
  },
};
