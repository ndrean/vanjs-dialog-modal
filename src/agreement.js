import van from "./van-0.11.11.min.js";
import context from "./context.js";
import dialog, { show } from "./dialog.js";
import contentAgreement from "./contentAgreement.js";
import objStr from "./obj-str.js";

const { div, br, span } = van.tags;
const agreement = van.state(null);

const Show = show(context);
const Dialog = dialog(context);

const AgreementModal = Dialog({
  id: "d1",
  idContent: "c1",
  states: [agreement],
  content: contentAgreement,
});

const status = (ctx) => (state) => {
  const content = (r) => {
    if (r === null) return "Please check the terms and conditions";
    return r
      ? "I agreed with the terms and conditions"
      : "I denied the terms and conditions";
  };

  return van.bind(state, (value) =>
    div(
      {
        class: value ? ctx.classes.isTrue : ctx.classes.isFalse,
      },
      content(value)
    )
  );
};

const Status = status(context);

const agreementPage = (ctx) =>
  div(
    {
      class: ctx.objStr({
        [ctx.classes.layout]: true,
        [ctx.classes.flexDirCol]: true,
      }),
    },
    Show({ id: "d1", label: "Check the agreements" }),
    // div(
    //   { class: context.classes.btnDiv },
    // ),
    AgreementModal(),
    br(),
    Status(agreement)
  );

export default agreementPage;
