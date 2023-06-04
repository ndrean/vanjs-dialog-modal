import UniversalRouter from "universal-router";
import { AgreementModal, FormModal, Show } from "./modal.examples";
import van from "./van-0.11.11.min.js";

const routes = [
  {
    path: "/",
    action: async () => {
      const test = await import("./nav");
      console.log(test);
      return test;
    },
  },
  {
    path: "/form",
    action: async () => {
      const test = await import("./nav");
      console.log(test);
      return test;
    },
  },
];

const router = new UniversalRouter(routes);

const { nav, a, br } = van.tags;

const handleNav = (e) => {
  e.preventDefault();
  history.pushState({ pathname: e.target.pathname }, "", e.target.pathname);
  window.addEventListener("popstate", (e) => {
    console.log(location.pathname);
    router
      .resolve({ pathname: location.pathname })
      .then((page) => van.add(page));
  });
};

const Home = () =>
  nav(
    a({ href: "/", onclick: handleNav }, "Home"),
    br(),
    a({ href: "/form", onclick: handleNav }, "Form")
  );
