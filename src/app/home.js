import truthy from "./truthy";

const homePage = (ctx) => {
  const {
    van,
    classes,
    agreement,
    formData,
    selected,
    selectedAuto,
    countries,
  } = ctx;
  const { br, p, h4, section } = van.tags;
  const Truthy = truthy(ctx);

  return function HomePage() {
    console.log("home");

    return section(
      { id: "home", class: classes.home, style: "font-size: 1.5em;" },

      br(),
      h4("The state of the context object: "),
      p("The agreement: ", Truthy({ checked: agreement.val }, agreement.val)),
      p("The selection: ", selected.val, " ", countries[selected.val]),
      p("The form: ", JSON.stringify(formData.val)),
      p(
        "The autcomplete selection: ",
        selectedAuto.val,
        " ",
        countries[selectedAuto.val]
      ),
      br()
    );
  };
};

export default homePage;
