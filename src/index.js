import van from "./van-0.11.11.min.js";
import context from "./context.js";
import navbar from "./app/navbar.js";
import homePage from "./app/home.js";

const Navbar = navbar(context);
const HomePage = homePage(context);
van.add(document.body, Navbar(HomePage));
