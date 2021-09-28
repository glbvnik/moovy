import React, { FC, useState } from "react";
import {
  Button,
  ButtonGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker } from "@mui/lab";
import { useActions } from "../hooks/useAction";
import { useClasses } from "../styles/classes";
import { styles } from "../styles/searchSx";

interface SearchProps {
  handleSearch: (title: string, year: Date | null) => void;
}

const Search: FC<SearchProps> = ({ handleSearch }) => {
  const { setFilms, setTotalResults, setBadRequest, setLoader } = useActions();

  const [title, setTitle] = useState("");
  const [year, setYear] = useState<Date | null>(null);

  const classes = useClasses();

  const handleReset = () => {
    setTitle("");
    setYear(null);

    setFilms([]);
    setTotalResults(0);
    setBadRequest(false);
    setLoader(true);
  };

  return (
    <Grid
      className={classes.wrapper}
      container
      justifyContent="center"
      sx={styles.searchBar}
    >
      <Grid
        className={classes.maxWidth}
        container
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} lg={2}>
          <Typography variant="h1">MOOVY</Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={7} lg={5}>
          <TextField
            variant="filled"
            color="success"
            label="Title"
            placeholder="Type in film title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            sx={styles.titleInput}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              views={["year"]}
              maxDate={new Date()}
              label="Year"
              onChange={(value) => setYear(value)}
              value={year}
              renderInput={(params) => (
                <TextField
                  variant="filled"
                  color="success"
                  sx={styles.yearInput}
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={3}>
          <ButtonGroup sx={styles.buttonGroup}>
            <Button
              variant="contained"
              color="success"
              sx={styles.searchBtn}
              onClick={() => handleSearch(title, year)}
            >
              Search
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={styles.resetBtn}
              onClick={handleReset}
            >
              Reset
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Search;
