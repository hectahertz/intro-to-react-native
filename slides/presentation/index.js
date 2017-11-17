// Import React
import React from "react";

// Import Spectacle Core tags
import { BlockQuote, Cite, Deck, Heading, Quote, Slide, Text } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

// Assets
const reactLogo = require("../assets/react.svg");

const theme = createTheme(
  {
    primary: "#0B0F13",
    secondary: "#F6F6F6",
    tertiary: "#41B883",
    quartenary: "#F6F6F6",

    mint: "#41B883",
    charcoal: "#35495E",
    auroMetalSaurus: "#727F80",
    whiteSmoke: "#F6F6F6",
    white: "#FFFFFF"
  },
  {
    primary: { name: "Oswald", googleFont: true, styles: ["300"] },
    secondary: { name: "Open Sans", googleFont: true, styles: ["300"] }
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        <Slide
          bgImage={reactLogo}
          transition={["slide"]}
          bgPosition="0% 20%"
          bgRepeat="no-repeat"
        >
          <Heading size={1} caps lineHeight={1.2} textColor="mint">
            React Native workshop
          </Heading>
          <Heading
            size={5}
            margin="32px 0 0 0"
            textColor="whiteSmoke"
            textFont="secondary"
          >
            ✨ Let's rebuild Twitter ✨
          </Heading>
        </Slide>
        <Slide bgImage={reactLogo} transition={["slide"]}>
          <Heading size={6} textColor="mint" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="whiteSmoke">
            Heading 1
          </Heading>
          <Heading size={2} textColor="whiteSmoke">
            Heading 2
          </Heading>
          <Heading size={3} textColor="whiteSmoke">
            Heading 3
          </Heading>
          <Heading size={4} textColor="whiteSmoke">
            Heading 4
          </Heading>
          <Heading size={5} textColor="whiteSmoke">
            Heading 5
          </Heading>
          <Text textColor="whiteSmoke">Standard text</Text>
        </Slide>
        <Slide bgImage={reactLogo} transition={["slide"]}>
          <BlockQuote>
            <Quote textColor="whiteSmoke">Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
