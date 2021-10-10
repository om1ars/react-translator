import {
  createMuiTheme,
  MenuItem,
  MuiThemeProvider,
  TextField,
} from "@material-ui/core";
import React from "react";
import "./Header.css";
import { ThemeProvider } from "@material-ui/styles";
import category from "../data/Category";

export const Header = () => {
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <div className="header">
      <span className="title">Word Hunt</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField id="standard-basic" label="standard" />
          <TextField
            id="standard-select-currency"
            select
            label="Select"
            helperText="Please select your language"
          >
            <MenuItem></MenuItem>
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};
