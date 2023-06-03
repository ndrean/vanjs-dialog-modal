import van from "./van-0.11.10.min.js";
const { p, button, label, form, input, br } = van.tags;

//   label(
//     label,
//     input({
//       id: id,
//       name: name,
//       type: type,
//       value: state,
//       onchange: (e) => (state.val = e.target.value),
//     })
//   );

const Form = ({ id, idContent, states, handleSubmit }) => {
  const [state1, state2] = states;
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
        type: "password",
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
        onchange: ({ target }) => {
          const pwd = document.getElementById("password");
          return target.checked ? (pwd.type = "text") : (pwd.type = "password");
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

export default Form;
