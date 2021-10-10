import { createMuiTheme, MuiThemeProvider, TextField } from "@material-ui/core";
import React from "react";
import "./Header.css";
import { ThemeProvider } from "@material-ui/styles";

export const Header = () => {
    
 

  return (
    <div className="header">
      <span className="title">Word Hunt</span>
      <div className="inputs">
          <TextField id="standard-basic" label="standard" />
      </div>
    </div>
  );
};
