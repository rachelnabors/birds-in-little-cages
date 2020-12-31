import { extendTheme } from "@chakra-ui/react";
// Global style overrides
import styles from "./styles";
import { Fonts } from "./fonts.js";

const fontStack_BirdScratches =
  '"birdscratches", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';

const theme = extendTheme({
  fonts: {
    body: fontStack_BirdScratches,
    heading: fontStack_BirdScratches,
    mono: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
  },
});

// Foundational style overrides

// import borders from "./foundations/borders";
// Component style overrides

// import Button from "./components/button";

// const overrides = {
//   styles,
//   //   borders,
//   // Other foundational style overrides go here
//   //   components: {
//   //     Button,
//   //     // Other components go here
//   //   },
// };
export default theme;
