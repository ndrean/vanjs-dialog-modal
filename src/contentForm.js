import button from "./button";
import footer from "./footer";

const setOutput = (val) => {
  const output = document.getElementsByTagName("output")[0];
  output.value = val;
};

const contentForm = ({ ctx, ...props }) => {
  const { van } = ctx;
  const { form, label, input, br, p } = van.tags;
  const setDisplay = van.state("password");
  const Button = button(ctx);
  const Footer = footer(ctx);

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
      "Enter your password",
      input({
        id: "password",
        name: "password",
        type: setDisplay,
        value: state1,
        autocomplete: "current-password",
        onchange: (e) => (state1.val = e.target.value),
      })
    ),
    br(),

    label(
      "Show password",
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
    label(
      "Test the slider",
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
    p("You selected: ", state2),
    br(),
    Footer({}, Button({ primary: true, raised: true }, "Submit"))
  );
};

export default contentForm;
