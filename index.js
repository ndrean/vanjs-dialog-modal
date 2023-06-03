import van from "./van-0.11.10.min.js";
import objstr from "./obj-str.js";
import Dialog from "./dialog.js";
import context from "./context.js";
import contentD1 from "./contentDialog1.js";
import formContent from "./contentForm.js";

const { p, button, br, output, span } = van.tags;

const pwd = van.state(""),
  slide = van.state(10),
  agreement = van.state(false);

// <-- 1st dialog: checkbox accept conditions
const btnShow = (ctx) => (id) =>
  button({ onclick: () => document.getElementById(id).showModal() }, "open");

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

const myFirstDialog = (ctx = {}) =>
  Dialog({
    id: "d1",
    idContent: "c1",
    inside: "inside1",
    states: [agreement],
    content: contentD1(ctx),
  });

// --> 1st dialog

// <-- 2d dialog: form with output
const setOutput = (val) => {
  const output = document.getElementsByTagName("output")[0];
  output.value = val;
};

const btnOpenForm = (ctx) => (id) =>
  button(
    {
      onclick: () => {
        setOutput("");
        document.getElementById(id).showModal();
      },
    },
    "open"
  );

const myFormDialog = (ctx = {}) =>
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
  btnShow(context)("d1"),
  myFirstDialog(context),
  p(agreement),
  status(context)(agreement),
  br(),
  btnOpenForm(context)("d2"),
  myFormDialog(context),
  br(),
  output()
);

export { setOutput };
