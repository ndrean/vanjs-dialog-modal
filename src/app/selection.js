import button from "../button/button";

export default (ctx) => {
  const { van, selected, countries, selectedAuto } = ctx,
    {
      div,
      section,
      details,
      summary,
      p,
      h3,
      form,
      label,
      select,
      option,
      br,
      hr,
      input,
      datalist,
    } = van.tags,
    optionList = van.state([]),
    Button = button(ctx);

  const updateKeyList = (input, keys) =>
    keys.filter((option) => option.toLowerCase().includes(input.toLowerCase()));

  const updateOptionList = (keys, optionList) =>
    keys.val.reduce((acc, key) => ({ ...acc, [key]: optionList[key] }), {});

  function buildList() {
    const options = {};
    for (const country in countries) {
      options[country] = countries[country] + " " + country;
    }
    return [options, Object.keys(options)];
  }

  const [options, keys] = buildList(),
    keyList = van.state(keys);

  console.log("function SelectionPage");

  return () =>
    section(
      { id: "select" },
      details(
        summary({ style: "font-size: 1.5em;" }, "Selection"),
        p("Two examples. The context stores the dataset.")
      ),

      hr(),
      h3("A simple SELECT example"),
      label(
        { for: "country", style: "padding-right:10px;" },
        "Choose a country:"
      ),
      select(
        {
          id: "country",
          value: selected,
          onchange: (e) => {
            selected.val = e.currentTarget.value.toString();
          },
        },
        option({ selected: "disabled" }, "Select a country"),
        keys.map((country) => option({ value: country }, options[country]))
      ),
      br(),
      p("Your selection: ", selected),
      br(),
      hr(),
      br(),
      h3("An AUTOCOMPLETE example with DATALIST"),
      br(),
      form(
        {
          autocomplete: "off",
          id: "autocomp",
          onsubmit: (e) => {
            e.preventDefault();
            selectedAuto.val = Object.keys(optionList.val)[0];
          },
        },
        div(
          // { style: "display: flex; justify-content: center;" ,
          { class: ctx.classes.flexDirCol },
          input({
            list: "countries",
            id: "choice",
            placeholder: "type in...",
            name: "selection",
            value: selectedAuto.val,
            oninput: (e) => {
              keyList.val = updateKeyList(e.currentTarget.value, keys);
              optionList.val = updateOptionList(keyList, options);
            },
          }),
          datalist(
            { id: "countries" },
            keyList.val.map((country) =>
              option({ value: country }, optionList[country])
            )
          ),

          Button(
            {
              primary: true,
              raised: true,
              ripple: true,
            },
            "Submit"
          )
        ),
        br(),
        van.bind(selectedAuto, (sel) => p("You selected: ", options[sel]))
      )
    );
};
