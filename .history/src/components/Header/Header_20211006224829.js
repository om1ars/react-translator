import {
  createMuiTheme,
  MenuItem,
  MuiThemeProvider,
  TextField,
} from "@material-ui/core";
import React from "react";
import "./Header.css";
import { ThemeProvider } from "@material-ui/styles";
import categoris from "../data/Category";

export const Header = ({category, setcategory}) => {
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
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            label="Select"
            helperText="Please select your language"
          >
            {categoris.map((option) => (
              <MenuItem>{option.value} key={option.label} value={option.label}</MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};
