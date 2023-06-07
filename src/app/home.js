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
      { id: "home", class: classes.home, style: "font-size: 1.5em;" },

      br(),
      h4("The state of the context object: "),
      p("The agreement: ", Truthy({ checked: agreement.val }, agreement.val)),
      p("The selection: ", JSON.stringify(selected.val)),
      p("The form: ", JSON.stringify(formData.val)),
      br()
    );
  };
};

export default homePage;
