import van from "../van-0.11.11.min.js";
import objstr from "../obj-str.js";

import context from "../context.js";
import router from "./routes.js";
import homePage from "./home.js";
import link from "../link/link.js";
import "../index.css";

context.van = van;
context.objStr = objstr;

const navbar = (ctx) => {
  const { van, classes } = ctx;
  const HomePage = homePage(ctx);
  const Link = link(ctx);
  const { div, nav, hr } = van.tags;

  const handleNav = (e) => {
    e.preventDefault();
    history.pushState("", "", e.target.pathname);
    router.resolve(e.target.pathname).then((page) => {
      const layout = document.getElementById("layout");
      activate();
      layout.innerHTML = "";
      van.add(layout, page);
    });
  };

  function activate() {
    return document.querySelectorAll(".linkNav").forEach((link) => {
      // link.classList.remove("active");
      link.removeAttribute("aria-current");
      if (link.href === window.location.href) {
        // link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  return div(
    nav(
      { class: classes.nav },
      Link(
        {
          href: "/",
          onclick: handleNav,
          name: "home",
        },
        "Home"
      ),
      Link(
        {
          href: "/agreement",
          onclick: handleNav,
          name: "agreement",
        },
        "Agreement"
      ),
      Link(
        {
          href: "/form",
          onclick: handleNav,
          name: "form",
        },
        "Form"
      )
    ),

    hr(),
    div({ id: "layout", class: classes.layout }, HomePage)
  );
};

const Navbar = navbar(context);
van.add(document.body, Navbar);
