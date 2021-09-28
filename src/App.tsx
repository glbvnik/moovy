import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import MyAppBar from "./components/MyAppBar";
import AppRouter from "./components/AppRouter";

const App: FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <MyAppBar />
        <AppRouter />
      </ThemeProvider>
    </>
  );
};

export default App;
