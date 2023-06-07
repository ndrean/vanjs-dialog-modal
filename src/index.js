import navbar from "./app/navbar";
import intro from "./app/intro";
import context from "./context.js";
// import van from "./van-0.11.11.min.js";

// fake url when starting
history.pushState("", "", "/");
const Navbar = navbar(context);
const Intro = intro(context);
const { van } = context;
const { div } = van.tags;

const App = () =>
  div(
    Navbar(""),
    div({ id: "layout", class: context.classes.layout }, Intro())
  );

// van.add(document.body, App());
document.body.replaceChildren(App());
