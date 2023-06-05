import button from "../button/button";
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
    states: [pwd, slide, formData],
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const fData = new FormData(e.target);
    const data = Object.fromEntries(fData);
    formData.val = data;
    setOutput(JSON.stringify(data, null, "\t"));
    document.getElementById(idContent).reset();
    document.getElementById(id).close();
    pwd.val = "";
    slide.val = 10;
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
        value: pwd,
        autocomplete: "current-password",
        onchange: (e) => (pwd.val = e.target.value),
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
        value: slide,
        oninput: (e) => (slide.val = e.target.value),
      })
    ),
    br(),
    p("You selected: ", slide),
    br(),
    Footer({}, Button({ primary: true, raised: true }, "Submit"))
  );
};

export default contentForm;
