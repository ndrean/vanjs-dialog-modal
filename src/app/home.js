import link from "../link/link";
import useDataStore from "./store";
import truthy from "./truthy";

const homePage = (ctx) => {
  const { van, classes } = ctx;
  const { h2, div, br, p, hr, h4 } = van.tags;
  const Link = link(ctx);
  const Truthy = truthy(ctx);

  const agreementCheck = useDataStore.getState().agreement;

  return div(
    { class: classes.home },
    h2(
      { style: "width:70vw;" },
      "Welcome to this demo app powered by Van.js and routed by Universal-Router and a global store managed by Zustand. "
    ),
    hr(),
    br(),
    h4("The state of the global Zustand store:"),
    p("The agreement: ", Truthy({ checked: agreementCheck }, agreementCheck)),
    p("The form: ", JSON.stringify(useDataStore.getState().formData)),
    br(),
    Link(
      {
        href: "https://github.com/FredericHeem/van-kit",
        target: "#",
        name: "source",
      },
      "This work is base on this repo"
    )
  );
};

export default homePage;
