import "./index.css";
import van from "./van.js";
import objStr from "./obj-str.js";

const selected = van.state(""),
  agreement = van.state(false),
  formData = van.state({}),
  selectedAuto = van.state("");

const context = {
  van,
  objStr,
  selected,
  agreement,
  formData,
  selectedAuto,
  countries: {
    Estonia: "🇪🇪",
    "European Union": "🇪🇺",
    France: "🇫🇷",
    Finlande: "🇫🇮",
    Georgia: "🇬🇪",
    Germany: "🇩🇪",
    "United Kingdom": "🇬🇧",
    "United States": "🇺🇸",
  },
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
    button: "button",
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
