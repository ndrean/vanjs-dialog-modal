import router from "./routes.js";
import homePage from "./home.js";
import link from "../link/link.js";
import "../index.css";

const navbar = (ctx) => {
  const { van, classes } = ctx;
  const Link = link(ctx);
  const { div, nav, hr } = van.tags;

  const curr = van.state("home");

  const rmActive = (v) =>
    document.querySelector(`a[name='${v}']`).removeAttribute("aria-current");

  const addActive = (v) =>
    document
      .querySelector(`a[name='${v}']`)
      .setAttribute("aria-current", "page");

  let nextPage;

  const handleNav = (e) => {
    e.preventDefault();
    nextPage = e.target.name;
    // needed to change the url for the "active-current" selection
    history.pushState("", "", e.target.pathname);
    router.resolve(e.target.pathname).then((page) => {
      const layout = document.getElementById("layout");
      layout.innerHTML = "";
      van.add(layout, page);
    });
  };

  const isPage = (next, local) => (next === local ? "page" : "");

  return (...children) =>
    div(
      nav(
        { class: classes.nav },
        Link(
          {
            href: "/",
            onclick: handleNav,
            name: "home",
            ariaCurrent: isPage(nextPage, "home"),
          },
          "Home"
        ),
        Link(
          {
            href: "/agreement",
            onclick: (e) => handleNav(e, "agreement"),
            name: "agreement",
            ariaCurrent: isPage(nextPage, "agreement"),
          },
          "Agreement"
        ),
        Link(
          {
            href: "/form",
            onclick: handleNav,
            name: "form",
            ariaCurrent: isPage(nextPage, "form"),
          },
          "Form"
        ),
        Link(
          {
            href: "/selections",
            onclick: handleNav,
            name: "selection",
            ariaCurrent: isPage(nextPage, "selection"),
          },
          "Selection"
        )
      ),
      hr(),
      div({ id: "layout", class: classes.layout }, children)
    );
};

export default navbar;
