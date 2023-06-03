const setOutput = (val) => {
  const output = document.getElementsByTagName("output")[0];
  output.value = val;
};

const contentForm = ({ ctx, ...props }) => {
  const { van } = ctx;
  const { form, label, input, br, button, p } = van.tags;
  const setDisplay = van.state("text");

  const {
    id,
    idContent,
    states: [state1, state2],
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    setOutput(JSON.stringify(data, null, "\t"));
    document.getElementById(idContent).reset();
    document.getElementById(id).close();
    state1.val = "";
    state2.val = 10;
    setDisplay.val = "password";
  };

  return form(
    {
      id: idContent,
      onsubmit: handleSubmit,
    },
    label(
      "enter your name",
      input({
        id: "password",
        name: "password",
        type: setDisplay,
        value: state1,
        onchange: (e) => (state1.val = e.target.value),
      })
    ),
    br(),
    label(
      "show password",
      input({
        id: "pwdbox",
        name: "pwdbox",
        type: "checkbox",
        onchange: (e) => {
          return e.target.checked
            ? (setDisplay.val = "text")
            : (setDisplay.val = "password");
        },
      })
    ),
    br(),
    p(state1),
    br(),
    label(
      "slider",
      input({
        id: "slide",
        type: "range",
        min: 0,
        max: 100,
        name: "slide",
        value: state2,
        oninput: (e) => (state2.val = e.target.value),
      })
    ),
    br(),
    p(state2),
    br(),
    button("submit")
  );
};

export { contentForm, setOutput };
