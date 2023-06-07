import router from "./routes.js";
import intro from "./intro.js";
import context from "../context.js";
import link from "../link/link.js";
import "../index.css";

const navbar = (ctx) => {
  const { van, classes } = ctx;
  const Link = link(ctx);
  const { div, nav, hr } = van.tags;

  const Intro = intro(context);
  const nextPage = van.state("");

  const handleNav = (e) => {
    e.preventDefault();
    nextPage.val = e.target.name;

    // needed to fake the display the change of url
    history.replaceState("", "", e.target.name);
    router.resolve(e.target.pathname).then((page) => {
      const layout = document.getElementById("layout");
      layout.innerHTML = "";
      van.add(layout, page());
    });
  };

  const isPage = (next, local) => (next === local ? "page" : "");

  return (children) => {
    // let page = children ? children : Intro();
    console.log("render nav");
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
        hr(),
        div({ id: "layout", class: classes.layout }, children || Intro())
      )
    );
  };
};

// fake url when starting
history.pushState("", "", "/");
const Navbar = navbar(context);
const Intro = intro(context);

const { van } = context;

van.add(document.body, Navbar(Intro()));
