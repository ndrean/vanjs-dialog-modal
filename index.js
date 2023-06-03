import van from "./van-0.11.11.min.js";
import context from "./context.js";
import objstr from "./obj-str.js";
import Dialog from "./dialog.js";
import { contentForm, setOutput } from "./contentForm.js";
import contentD1 from "./contentDialog1.js";

context.van = van;
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

  const {
    classes: { isTrue, isFalse },
  } = ctx;

  return van.bind(state, (value) =>
    span(
      {
        class: objstr({
          [isTrue]: value === true,
          [isFalse]: value === false,
        }),
      },
      content(value)
    )
  );
};

function myFirstDialog(ctx) {
  return Dialog({
    ctx,
    id: "d1",
    idContent: "c1",
    inside: "inside1",
    states: [agreement],
    content: contentD1,
  });
}
// --> 1st dialog

// <-- 2d dialog: form with output
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

function myFormDialog(ctx) {
  return Dialog({
    ctx,
    id: "d2",
    idContent: "f1",
    inside: "inside2",
    states: [pwd, slide],
    content: contentForm,
  });
}

van.add(
  document.body,
  btnOpenForm(context)("d2"),
  myFormDialog(context),
  br(),
  output(),
  br(),
  btnShow(context)("d1"),
  myFirstDialog(context),
  p(agreement),
  status(context)(agreement)
);
