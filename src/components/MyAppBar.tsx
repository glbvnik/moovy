import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Button, Toolbar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import HomeIcon from "@mui/icons-material/Home";

const MyAppBar: FC = () => {
  const history = useHistory();

  return (
    <AppBar position="static">
      <Toolbar>
        <Button
          startIcon={<HomeIcon />}
          size="large"
          onClick={() => history.push("/")}
        >
          Home
        </Button>
        <Button
          startIcon={<StarIcon />}
          size="large"
          onClick={() => history.push("/rated")}
        >
          Rated films
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
