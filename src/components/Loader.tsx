import React, { FC } from "react";
import { CircularProgress, Grid } from "@mui/material";

const Loader: FC = () => {
  return (
    <Grid container alignItems="center" justifyContent="center" flexGrow={1}>
      <CircularProgress />
    </Grid>
  );
};

export default Loader;
