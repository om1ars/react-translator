import {
  MenuItem,
  TextField,
} from "@material-ui/core";
import {createMuiTheme} from '@material-ui/core'
import React from "react";
import "./Header.css";
import { ThemeProvider } from "@material-ui/styles";
import categoris from "../data/Category";

export const Header = ({ category, setcategory, word, setword, checked }) => {
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      type:  "dark" 
    },
  });

  const handleChange = (e) => {
    setcategory(e);
    setword("");
  };

  return (
    <div className="header">
      <span className="title" style={{ color: checked ? "black" : "white" }}>
        {word ? word : "Shaxsiy lug'at"}
      </span>
      <div className="inputs">
        <ThemeProvider theme={checked ? darkTheme : lightTheme}>
          <TextField
            id="standard-basic"
            // className="search"
            label="So'zni kiriting"
            value={word}
            className="input"
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
