import router from "./routes.js";
import link from "../link/link.js";
import intro from "./intro";

import "../index.css";

const navbar = (ctx) => {
  const { van, classes } = ctx;
  const Link = link(ctx);
  const { div, nav, hr } = van.tags;

  const nextPage = van.state("");

  const Intro = intro(ctx);
  const handleNav = (e) => {
    e.preventDefault();
    nextPage.val = e.target.name;

    // needed to fake the display the change of url
    history.replaceState("", "", e.target.name);
    router.resolve(e.target.pathname).then((page) => {
      document.getElementById("layout").replaceChildren(page());
    });
  };

  const isPage = (next, local) => (next === local ? "page" : "");

  console.log("render nav");
  return function Navbar() {
    return van.bind(nextPage, (v) =>
      div(
        nav(
          { class: classes.nav },
          Link(
            {
              href: "/home",
              onclick: handleNav,
              name: "home",
              ariaCurrent: isPage(v, "home"),
            },
            "Home"
          ),
          Link(
            {
              href: "/agreement",
              onclick: (e) => handleNav(e, "agreement"),
              name: "agreement",
              ariaCurrent: isPage(v, "agreement"),
            },
            "Agreement"
          ),
          Link(
            {
              href: "/form",
              onclick: handleNav,
              name: "form",
              ariaCurrent: isPage(v, "form"),
            },
            "Form"
          ),
          Link(
            {
              href: "/selections",
              onclick: handleNav,
              name: "selection",
              ariaCurrent: isPage(v, "selection"),
            },
            "Selection"
          )
        ),
        hr()
      )
    );
  };
};

export default navbar;
