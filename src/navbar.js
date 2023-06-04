import van from "./van-0.11.11.min.js";
import objstr from "./obj-str.js";

import context from "./context.js";
import { router } from "./routes";
import homePage from "./home.js";

context.van = van;
context.objStr = objstr;

const handleNav = (e) => {
  e.preventDefault();
  window.onpopstate = handlePopstate(e.target.pathname);
};

const handlePopstate = (path) => {
  const layout = document.getElementById("layout");
  router.resolve(path).then((page) => {
    layout.innerHTML = "";
    van.add(layout, page);
  });
};

const navbar = (ctx) => {
  const { van, classes } = ctx;
  const isActive = van.state();
  const HomePage = homePage(ctx);
  const { div, nav, a, hr } = van.tags;
  return div(
    nav(
      { class: classes.nav },
      a({ class: "", href: "/", onclick: handleNav }, "Home"),
      a(
        {
          class: "",
          href: "/agreement",
          onclick: handleNav,
        },
        "Agreement"
      ),
      a({ class: "", href: "/form", onclick: handleNav }, "Form")
    ),
    hr(),
    div({ id: "layout", class: classes.layout }, HomePage)
  );
};

const Navbar = navbar(context);
van.add(document.body, Navbar);

// export default navbar;
