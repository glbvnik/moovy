import React, { FC } from "react";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import SearchOffIcon from "@mui/icons-material/SearchOff";

interface ListStatesProps {
  badRequest: boolean;
}

const ListStates: FC<ListStatesProps> = ({ badRequest }) => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ height: "50%" }}
    >
      <Box display="flex" flexDirection="column">
        {badRequest ? (
          <SearchOffIcon
            sx={{
              fontSize: "120px",
              margin: "0 auto",
              "@media (min-width: 900px)": {
                fontSize: "150px",
              },
            }}
          />
        ) : (
          <MovieIcon
            sx={{
              fontSize: "120px",
              margin: "0 auto",
              "@media (min-width: 900px)": {
                fontSize: "150px",
              },
            }}
          />
        )}
        <Typography variant="h2">
          {badRequest ? "No results found" : "Start searching"}
        </Typography>
      </Box>
    </Grid>
  );
};

export default ListStates;
