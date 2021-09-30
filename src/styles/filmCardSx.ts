export const styles = {
  card: {
    display: "flex",
    borderRadius: "12px",
    marginBottom: 1,
    "@media (min-width: 1200px)": {
      marginBottom: 0,
    },
    maxHeight: "300px",
  },
  filmImage: {
    cursor: "pointer",
    flex: "1 0 130px",
    height: 200,
    width: 130,
    maxWidth: 130,
    "@media (min-width: 320px)": {
      flex: "1 0 138px",
      width: 138,
      maxWidth: 138,
    },
    "@media (min-width: 900px)": {
      flex: "1 0 160px",
      height: 230,
      width: 160,
      maxWidth: 160,
    },
    "@media (min-width: 1200px)": {
      flex: "1 0 180px",
      height: 250,
      width: 180,
      maxWidth: 180,
    },
    "@media (min-width: 1800px)": {
      flex: "1 0 210px",
      height: 280,
      width: 210,
      maxWidth: 210,
    },
    "@media (min-width: 2100px)": {
      flex: "1 0 220px",
      height: 300,
      width: 220,
      maxWidth: 220,
    },
  },
  content: {
    flex: "1 0 auto",
    padding: "12px 12px 0 12px",
    "& .MuiTypography-root": {
      overflow: "auto",
      maxHeight: 112,
      "@media (min-width: 1200px)": {
        maxHeight: 140,
      },
      "@media (min-width: 1800px)": {
        maxHeight: 160,
      },
      "@media (min-width: 2100px)": {
        maxHeight: 190,
      },
    },
    "@media (min-width: 320px)": {
      padding: "16px 16px 0 16px",
    },
  },
  contentWithGenre: {
    flex: "1 0 auto",
    padding: "12px 12px 0 12px",
    "& .MuiTypography-root": {
      overflow: "auto",
      maxHeight: 98,
      "@media (min-width: 375px)": {
        maxHeight: 90,
      },
      "@media (min-width: 1200px)": {
        maxHeight: 130,
      },
      "@media (min-width: 1800px)": {
        maxHeight: 150,
      },
      "@media (min-width: 2100px)": {
        maxHeight: 170,
      },
    },
    "@media (min-width: 320px)": {
      padding: "16px 16px 0 16px",
    },
  },
  filmName: {
    cursor: "pointer",
    fontSize: 21,
    "@media (min-width: 375px)": {
      fontSize: 23,
    },
    "@media (min-width: 414px)": {
      fontSize: 25,
    },
    "@media (min-width: 900px)": {
      fontSize: 27,
    },
    "@media (min-width: 1200px)": {
      fontSize: 29,
    },
    "@media (min-width: 1800px)": {
      fontSize: 36,
    },
  },
  filmYear: {
    marginTop: "1px",
    "@media (min-width: 320px)": {
      marginTop: "3px",
    },
    "@media (min-width: 375px)": {
      marginTop: "6px",
    },
    "@media (min-width: 414px)": {
      fontSize: "18px",
    },
    "@media (min-width: 900px)": {
      fontSize: "19px",
    },
    "@media (min-width: 1200px)": {
      fontSize: "20px",
    },
    "@media (min-width: 1800px)": {
      fontSize: "23px",
    },
    "@media (min-width: 2100px)": {
      fontSize: "24px",
    },
  },
  filmGenre: {
    lineHeight: 1.4,
  },
  ratingBox: {
    paddingBottom: "6px",
    paddingLeft: "10px",
    "@media (min-width: 320px)": {
      paddingLeft: "12px",
    },
  },
};
