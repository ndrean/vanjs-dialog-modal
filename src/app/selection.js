import useDataStore from "./store";

const countries = {
  Estonia: "🇪🇪",
  "European Union": "🇪🇺",
  France: "🇫🇷",
  Finlande: "🇫🇮",
  Georgia: "🇬🇪",
  Germany: "🇩🇪",
  "United Kingdom": "🇬🇧",
  "United States": "🇺🇸",
};

export default (ctx) => {
  const { van, classes } = ctx;
  const {
    div,
    section,
    details,
    summary,
    p,
    h1,
    h3,
    form,
    label,
    select,
    option,
    br,
    hr,
    input,
    datalist,
    span,
  } = van.tags;

  function buildList() {
    const options = {};
    for (const country in countries) {
      options[country] = countries[country] + " " + country;
    }
    return [options, Object.keys(options)];
  }

  const [options, keys] = buildList();

  const selected = van.state(""),
    optionList = van.state([]),
    selectedAuto = van.state([]),
    keyList = van.state(keys);

  return section(
    { id: "select.examples" },

    h1("Selection"),
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
          useDataStore.setState({ selection: selected });
        },
      },
      option({ selected: "disabled" }, "Select a country"),
      keys.map((country) => option({ value: country }, options[country]))
    ),
    br(),
    p("Your selection: ", selected),
    br(),

    h3("An AUTOCOMPLETE example with DATALIST"),
    p(
      "!! Van.js bug to fix on 'list' attribute for 'input' tag at the moment..."
    )
    /*
      form(
                {
                  autocomplete: "off",
                  id: "autocomp",
                  // onsubmit: (e) => {
                    //   e.preventDefault();
                    //   selectedAuto(Object.keys(optionList())[0]);
                    // },
                  },
                  
    div(
      input({
        list: "countries",
        id: "choice",
        placeholder: "type in...",
        oninput: (e) => {
          console.log(keys, e.currentTarget.value);
          // console.log(updateKeyList(e.currentTarget.value, keys));
          // keyList.val = updateKeyList(e.currentTarget.value, keys);
          // console.log(keyList);
          // optionList.val = updateOptionList(keyList, options);
        },
      }),
      // datalist(
      //   { id: "countries" },
      //   keyList.map((country) =>
      //     option({ value: country }, optionList[country])
      //   )
      // ),
      button("submit")
    ),

    br()
    // div(output(options[selectedAuto]))
    */
  );
};

function updateKeyList(input, keyList) {
  return keyList.filter((option) =>
    option.toLowerCase().includes(input.toLowerCase())
  );
}

function updateOptionList(keyList, optionList) {
  return keyList.reduce((acc, key) => ({ ...acc, [key]: optionList[key] }), {});
}
