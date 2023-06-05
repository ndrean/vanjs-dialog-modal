import van from "./van-0.11.11.min.js";
import context from "./context.js";
import navbar from "./app/navbar.js";

const Navbar = navbar(context);
van.add(document.body, Navbar);
