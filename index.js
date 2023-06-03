import van from "./van-0.11.10.min.js";
import objstr from "./obj-str.js";
import Dialog from "./dialog.js";
import Form from "./form.js";
import context from "./context.js";

const {
  div,
  p,
  button,
  label,
  input,
  footer,
  header,
  article,
  h1,
  br,
  output,
  span,
} = van.tags;

const pwd = van.state(""),
  slide = van.state(10),
  agreement = van.state(false);

// <-- 1st dialog: checkbox accept conditions
const btnClose = (id, state) =>
  button(
    {
      onclick: () => {
        state.val = false;
        document.getElementById(id).close();
      },
    },
    "close"
  );

const btnAccept = (id) =>
  button(
    {
      onclick: () => document.getElementById(id).close(),
    },
    "Accept"
  );

const btnShow = (id) =>
  button({ onclick: () => document.getElementById(id).showModal() }, "open");

const Header = (ctx) => (content) =>
  header(h1({ class: ctx.classes.h1 }, content));

const content =
  (ctx) =>
  ({ id, idContent, states }) => {
    const [state, ...rest] = states;
    return div(
      { id: idContent },
      Header(ctx)("My beauty"),
      article(
        label(
          input({
            type: "checkbox",
            id: "agreement",
            name: "agreement",
            checked: state,
            onchange: (e) => (state.val = e.target.checked),
          }),
          "I agree with the terms and conditions"
        )
      ),
      footer(btnClose(id, state), btnAccept(id))
    );
  };

const status = (ctx) => (state) => {
  const content = (r) =>
    r
      ? "I agreed with the terms and conditions"
      : "I denied the terms and conditions";

  return van.bind(state, (value) =>
    span(
      {
        class: objstr({
          [ctx.classes.isTrue]: value === true,
          [ctx.classes.isFalse]: value === false,
        }),
      },
      content(value)
    )
  );
};

const myFirstDialog = (context = {}) =>
  Dialog({
    id: "d1",
    idContent: "c1",
    inside: "inside1",
    states: [agreement],
    content: content(context),
  });

// --> 1st dialog

// <-- 2d dialog: form with output
const btnOpenForm = (id) =>
  button(
    {
      onclick: () => {
        setOutput("");
        document.getElementById(id).showModal();
      },
    },
    "open"
  );

const setOutput = (val) => {
  const output = document.getElementsByTagName("output")[0];
  output.value = val;
};
const formContent =
  (ctxt) =>
  ({ id, idContent, states }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      setOutput(JSON.stringify(data, null, "\t"));
      document.getElementById(idContent).reset();
      document.getElementById(id).close();
    };
    return Form({ id, idContent, states, handleSubmit });
  };

const myFormDialog = (ctx) =>
  Dialog({
    id: "d2",
    idContent: "f1",
    inside: "inside2",
    states: [pwd, slide],
    content: formContent(ctx),
  });

// --> 2d dialog

van.add(
  document.body,
  btnShow("d1"),
  myFirstDialog(context),
  p(agreement),
  status(context)(agreement),
  br(),
  btnOpenForm("d2"),
  myFormDialog(),
  output()
);
