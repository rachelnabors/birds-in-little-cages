import React from "react";
import { Global } from "@emotion/react";
const Fonts = () => (
  <Global
    styles={`@font-face {
        font-family: "birdscratches";
        src: url("./fonts/birdscratchesbolditalic-webfont.woff2") format("woff2"),
            url("./fonts/birdscratchesbolditalic-webfont.woff") format("woff");
        font-weight: bold;
        font-style: italic;
        letter-spacing: -0.1em;
        }

        @font-face {
        font-family: "birdscratches";
        src: url("./fonts/birdscratchesbolditalic-webfont.woff2") format("woff2"),
            url("./fonts/birdscratchesbolditalic-webfont.woff") format("woff");
        font-weight: bold;
        font-style: normal;
        letter-spacing: -0.1em;
        }

        @font-face {
        font-family: "birdscratches";
        src: url("./fonts/birdscratchesbolditalic-webfont.woff2") format("woff2"),
            url("./fonts/birdscratchesbolditalic-webfont.woff") format("woff");
        font-weight: normal;
        font-style: italic;
        letter-spacing: -0.1em;
        }
        @font-face {
        font-family: "birdscratches";
        src: url("./fonts/birdscratches-webfont.woff2") format("woff2"),
            url("./fonts/birdscratches-webfont.woff") format("woff");
        font-weight: normal;
        font-style: normal;
        }`}
  />
);
