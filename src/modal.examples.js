import van from "./van-0.11.11.min.js";
import context from "./context.js";
import objstr from "./obj-str.js";
import dialog from "./dialog.js";
import contentForm from "./contentForm.js";
import contentAgreement from "./contentAgreement.js";
import button from "./button.js";

context.van = van;
context.objStr = objstr;

const { br, output, span, div, p } = van.tags;

const pwd = van.state(""),
  slide = van.state(10),
  agreement = van.state(false);

// modal opener
// const show = (ctx) => {
//   const Button = button(ctx);
//   return ({ id, label }) =>
//     Button(
//       {
//         primary: true,
//         raised: true,
//         ripple: true,
//         onclick: () => document.getElementById(id).showModal(),
//       },
//       label
//     );
// };

// const test = (ctx) => {
//   const Button = button(ctx);
//   return Button({ primary: true, ripple: true }, "okidoki");
// };

// display agreement acceptance or not
const status = (ctx) => (state) => {
  const content = (r) =>
    r
      ? "I agreed with the terms and conditions"
      : "I denied the terms and conditions";

  return van.bind(state, (value) =>
    span(
      {
        class: value ? ctx.classes.isTrue : ctx.classes.isFalse,
      },
      content(value)
    )
  );
};

const Show = show(context);
const Status = status(context);
const Dialog = dialog(context);

const AgreementModal = Dialog({
  id: "d1",
  idContent: "c1",
  states: [agreement],
  content: contentAgreement,
});

const FormModal = Dialog({
  id: "d2",
  idContent: "f1",
  states: [pwd, slide],
  content: contentForm,
});

const Check = () =>
  div(
    div(
      { class: context.classes.btnDiv },
      Show({ id: "d2", label: "Open the form" })
    ),
    FormModal(),
    output({ id: "output" })
  );
/*
van.add(
  document.body,
  div(
    { class: context.classes.btnDiv },
    Show({ id: "d2", label: "Open the form" })
  ),
  FormModal(),
  output({ id: "output" }),
  br(),
  div(
    { class: context.classes.btnDiv },
    Show({ id: "d1", label: "Agreement check" })
  ),
  AgreementModal(),
  br(),
  Status(agreement)
);
*/

export default Check;
export { Show, FormModal, AgreementModal };
