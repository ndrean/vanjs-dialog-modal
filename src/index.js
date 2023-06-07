import navbar from "./app/navbar";
import intro from "./app/intro";
import context from "./context.js";

// fake url when starting
history.pushState("", "", "/");
const Navbar = navbar(context);
const Intro = intro(context);

const { van } = context;

van.add(document.body, Navbar(Intro()));
