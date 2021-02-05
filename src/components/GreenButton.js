import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export function GreenButton(props) {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary" {...props}>
        {props.children}
      </Button>
    </ThemeProvider>
  );
}
