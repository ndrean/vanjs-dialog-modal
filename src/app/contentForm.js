import button from "../button/button";
import footer from "./footer";

const setOutput = (val) =>
  (document.getElementsByTagName("output")[0].value = val);

const contentForm = ({ ctx, ...props }) => {
  const { van } = ctx,
    { form, label, input, br, p } = van.tags,
    setDisplay = van.state("password"),
    Button = button(ctx),
    Footer = footer(ctx);

  const {
    id,
    idContent,
    states: [pwd, slide, formData],
    ref,
  } = props;

  function handleSubmit(e) {
    e.preventDefault();
    const fData = new FormData(e.target),
      data = Object.fromEntries(fData);
    formData.val = data;
    setOutput(JSON.stringify(data, null, "\t"));
    Form.reset();
    document.getElementById(id).close();
    pwd.val = "";
    slide.val = 10;
    setDisplay.val = "password";
  }

  const Form = form(
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
        onchange: (e) =>
          e.target.checked
            ? (setDisplay.val = "text")
            : (setDisplay.val = "password"),
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
  return Form;
};

export default contentForm;
