import router from "./routes.js";
import link from "../link/link.js";

import "../index.css";

const navbar = (ctx) => {
  const { van, classes } = ctx,
    { div, nav, hr } = van.tags,
    nextPage = van.state(""),
    Link = link(ctx);

  const handleNav = (e) => {
    e.preventDefault();
    nextPage.val = e.target.name;

    // needed to fake the display the change of url
    history.replaceState("", "", e.target.name);
    router.resolve(e.target.pathname).then((page) => {
      layout.replaceChildren(page());
    });
  };

  const isPage = (next, local) => (next === local ? "page" : "");

  console.log("function Navbar");

  return () =>
    div(
      nav(
        { class: classes.nav },
        Link(
          {
            href: "/context",
            onclick: handleNav,
            name: "Context",
            ariaCurrent: isPage(nextPage.val, "context"),
          },
          "Context"
        ),
        Link(
          {
            href: "/agreement",
            onclick: (e) => handleNav(e, "agreement"),
            name: "agreement",
            ariaCurrent: isPage(nextPage.val, "agreement"),
          },
          "Agreement"
        ),
        Link(
          {
            href: "/form",
            onclick: handleNav,
            name: "form",
            ariaCurrent: isPage(nextPage.val, "form"),
          },
          "Form"
        ),
        Link(
          {
            href: "/selections",
            onclick: handleNav,
            name: "selection",
            ariaCurrent: isPage(nextPage.val, "selection"),
          },
          "Selection"
        )
      ),
      hr()
    )
};

export default navbar;
