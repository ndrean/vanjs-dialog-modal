import link from "../link/link";
import truthy from "./truthy";

const homePage = (ctx) => {
  const { van, classes, agreement, formData, selected } = ctx;
  const { h2, br, p, hr, h4, section } = van.tags;
  const Link = link(ctx);
  const Truthy = truthy(ctx);

  return function HomePage() {
    console.log("home");

    return section(
      { id: "home", class: classes.home },
      // h2(
      //   { style: "width:70vw;" },
      //   "Welcome to this demo app. It is powered by VanJS, routed by Universal-Router. It uses the CONTEXT object as a global store."
      // ),
      // hr(),
      br(),
      h4("The state of the context object: "),
      p("The agreement: ", Truthy({ checked: agreement.val }, agreement.val)),
      p("The selection: ", JSON.stringify(selected.val)),
      p("The form: ", JSON.stringify(formData.val)),
      br(),
      Link(
        {
          href: "https://github.com/FredericHeem/van-kit",
          target: "#",
          name: "source",
        },
        "This work is based on this repo"
      )
    );
  };
};

export default homePage;
