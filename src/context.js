import "./index.css";
import van from "./van-0.11.11.min.js";
import objStr from "./obj-str.js";

const selected = van.state(""),
  agreement = van.state(false),
  formData = van.state({});

const context = {
  van,
  objStr,
  selected,
  agreement,
  formData,
  theme: {
    textColor: "midnightblue",
    bgColor: "bisque",
  },
  classes: {
    h1: "blueBisque",
    isTrue: "accepted",
    isFalse: "denied",
    footer: "footer",
    btnDiv: "btnDiv",
    footer: "footer",
    nav: "nav",
    left: "left",
    fullWidth: "fullWidth",
    raised: "raised",
    primary: "primary",
    accent: "accent",
    ripple: "ripple",
    disabled: "disabled",
    layout: "layout",
    flexDirCol: "flex-dir-col",
    home: "home",
    linkNav: "linkNav",
    spanPink: "span-pink",
    spanLightBlue: "span-lightblue",
    accepted: "accepted",
    denied: "denied",
  },
};

export default context;
