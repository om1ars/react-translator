import { createMuiTheme, TextField } from "@material-ui/core";
import React from "react";
import "./Header.css";
import 

export const Header = () => {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  return (
    <div className="header">
      <span className="title">Word Hunt</span>
      <div className="inputs">
        <ThemeProvider theme="darkTheme">
          <TextField id="standard-basic" label="standard" />
        </ThemeProvider>
      </div>
    </div>
  );
};
