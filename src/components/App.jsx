import React from "react";
import "../assets/styles.css";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import Main from "./Main";
import Download from "./Download";
import Item from "./Item";
import Card from "./Card";

// clumsy but i cant find a better way
import Discover from "../assets/images/product-search.svg";
import Augmented from "../assets/images/product-smartphone.svg";
import Endless from "../assets/images/product-work.svg";
import Badge1 from "../assets/images/badge.laravel-mix.svg";
import Badge2 from "../assets/images/badge.how-to-read-code.svg";

function App() {
  const items = [
    {
      title: "Discover",
      text: "Get information on using these guidelines whenever using these guidelines wheneverusing these guidelines whenever",
      image: Discover,
    },
    {
      title: "Augmented",
      text: "Get information on using these guidelines whenever using these guidelines wheneverusing these guidelines whenever",
      image: Augmented,
    },
    {
      title: "Endless Possibilities",
      text: "Get information on using these guidelines whenever using these guidelines wheneverusing these guidelines whenever",
      image: Endless,
    },
  ];

  const cards = [
    {
      img: Badge1,
      btnText: "AUTOMATION",
      action: "ROLL OUT",
      title: "Automatic Prototyping",
      description:
        "Webpack is the most powerful and flexible asset compilation tool available today. With that power, however, comes a certain level of complexity.",
    },
    {
      img: Badge2,
      btnText: "SIMPLICITY",
      action: "SIP COFFEE",
      title: "Complexity Simplified",
      description:
        "I know too many backend developers who are stifled by one glaring phobia: CSS. How to you construct a layout when nothing lines up?",
    },
    ,
  ];

  return (
    <>
      <Header />
      <Main />
      <Download isBordered={true} isPadded={true} />
      <Section
        title={"Meet Protoapp"}
        text={
          "The app lorem ipsum app lorem ipsum never gonna give you up app lorem ipsum app lorem ipsum lorem ipsum app lorem ipsum app lorem ipsum"
        }
        classToAdd="meet-protoapp"
      />
      <Section
        children={
          <>
            <Item item={items[0]} />
            <Item item={items[1]} direction={"right"} />
            <Item item={items[2]} />
          </>
        }
      />
      <Section
        title={"Deep dive. Ready?"}
        text={"Yes I am. Please hire me."}
        color={"blue"}
        isFullWidth={true}
        children={<Download />}
        classToAdd="deep-dive"
      />
      <Section
        title={"Last Call to Action"}
        text={"Another section content goes here"}
        children={
          <div className="cards container--full">
            <Card item={cards[0]} color="yellow" />
            <Card item={cards[1]} color="blue-green" />
          </div>
        }
        classToAdd="call-to-action"
      />
      <Footer />
    </>
  );
}

export default App;
