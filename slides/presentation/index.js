// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Quote,
  Slide,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

// Assets
const reactBg = require("../assets/react-bg.svg");
const react = require("../assets/react.svg");
const facebook = require("../assets/facebook.png");
const instagram = require("../assets/instagram.png");
const airbnb = require("../assets/airbnb.svg");
const apple = require("../assets/apple.svg");
const android = require("../assets/android.svg");
const expo = require("../assets/expo.svg");
const reactNative = require("../assets/react-native.svg");

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
          bgImage={reactBg}
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
            ✨ Welcome to the fuuuture~ ✨
          </Heading>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={1} textColor="mint" caps lineHeight={1.2}>
            What is this sorcery? 😲
          </Heading>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading
            size={2}
            textColor="whiteSmoke"
            textFont="secondary"
            lineHeight={1.2}
          >
            Not an “HTML5 app” or a “hybrid app” 🙅🏻
          </Heading>
        </Slide>
        <Slide transition={["slide"]}>
          <BlockQuote>
            <Quote lineHeight={1.2} textColor="whiteSmoke">
              JavaScript–driven Native app
            </Quote>
            <Cite textFont="secondary">John Wargo</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading
            size={1}
            caps
            textColor="mint"
            lineHeight={2}
          >
            ✨ JS World ✨
          </Heading>
          <Heading
            size={4}
            textColor="whiteSmoke"
            textFont="secondary"
            lineHeight={1.2}
          >
            ⬆️ The bridge ⬇️
          </Heading>
          <Heading
            size={1}
            caps
            textColor="mint"
            lineHeight={2}
          >
            ✨ Native World ✨
          </Heading>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={1} textColor="mint" caps lineHeight={1.2}>
            Many great features!
          </Heading>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading
            size={2}
            textFont="secondary"
            textColor="whiteSmoke"
            lineHeight={1.2}
          >
            React powered
          </Heading>
          <Image
            src={react}
            display="inline-block"
            height={300}
            width={300}
            margin="32px 0px 0 0"
          />
        </Slide>
        <Slide transition={["slide"]}>
          <Heading
            size={2}
            textColor="whiteSmoke"
            textFont="secondary"
            lineHeight={1.2}
          >
            ⚡️ Node JS ⚡️
          </Heading>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading
            size={2}
            textColor="whiteSmoke"
            textFont="secondary"
            lineHeight={1.2}
          >
            🔥 Hot reloading 🔥
          </Heading>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading
            size={2}
            textColor="whiteSmoke"
            textFont="secondary"
            lineHeight={1.2}
          >
            Talks to native code! 😲
          </Heading>
          <Image
            src={android}
            display="inline-block"
            height={196}
            width={196}
            margin="48px 64px 0 0"
          />
          <Image
            src={apple}
            display="inline-block"
            height={196}
            width={196}
            margin="48px 0px 0 0"
          />
        </Slide>
        <Slide transition={["slide"]}>
          <Heading
            size={1}
            textColor="whiteSmoke"
            textFont="secondary"
            lineHeight={1.2}
          >
            Who's loving it?
          </Heading>
          <Image
            src={instagram}
            display="inline-block"
            height={200}
            width={200}
            margin="48px 64px 0 0"
          />
          <Image
            src={airbnb}
            display="inline-block"
            height={200}
            width={200}
            margin="48px 64px 0 0"
          />
          <Image
            src={facebook}
            display="inline-block"
            height={200}
            width={200}
            margin="48px 0px 0 0"
          />
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={1} textColor="mint" caps lineHeight={1.2}>
            Are you ready? 😍
          </Heading>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={1} textColor="mint" caps lineHeight={1.2}>
            Two ways to start
          </Heading>
          <Image
            src={expo}
            display="inline-block"
            height={300}
            width={300}
            margin="48px 64px 0 0"
          />
          <Image
            src={reactNative}
            display="inline-block"
            height={300}
            width={300}
            margin="48px 0px 0 0"
          />
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={1} textColor="mint" caps lineHeight={1.2}>
            Let's go! 🚀
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
