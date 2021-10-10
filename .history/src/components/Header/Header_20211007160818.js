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

export const Header = ({ category, setcategory, word, setword }) => {
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  const handleChange = (e) => {
    setcategory(e);
    setword("");
  };

  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
          
            id="standard-basic"
            label="standard"
            className="search"
            id="standard-basic"
            label="So'zni kiriting"
            value={word}
            onChange={(e) => setword(e.target.value)}
          />
          <TextField
            className="select"
            select
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            label="Tillar"
          >
            {categoris.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};
