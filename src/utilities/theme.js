import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  html: {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    boxSizing: "border-box",
  },
  "*, *::before, *::after": {
    boxSizing: "inherit",
  },
  "strong, b": {
    fontWeight: "bolder",
  },
  body: {
    margin: 0,
    padding: 0,
  },
});
