import dialog, { show } from "../modal/dialog.js";
import contentAgreement from "./contentAgreement.js";

const status = (ctx) => (state) => {
  const { van } = ctx;
  const { div } = van.tags;
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

const agreementPage = (ctx) => {
  const { van } = ctx;
  const { div, br } = van.tags;

  const agreement = van.state(null);

  const Show = show(ctx);
  const Dialog = dialog(ctx);

  const AgreementModal = Dialog(
    {
      id: "d1",
      idContent: "c1",
      states: [agreement],
    },
    contentAgreement
  );

  const Status = status(ctx);

  return div(
    {
      class: ctx.objStr({
        [ctx.classes.layout]: true,
        [ctx.classes.flexDirCol]: true,
      }),
    },
    Show({ id: "d1", label: "Check the agreements" }),
    AgreementModal,
    br(),
    Status(agreement)
  );
};

export default agreementPage;
