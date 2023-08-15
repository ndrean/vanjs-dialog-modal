import dialog, { show } from "../modal/dialog.js";
import contentAgreement from "./contentAgreement.js";

const status = (ctx) => (state) => {
  const { van } = ctx,
    { div } = van.tags;

  const content = (r) => (
    r === null && "Please check the terms and conditions",
    r
      ? "I agreed with the terms and conditions"
      : "I denied the terms and conditions"
  );

  return () =>
    div(
      {
        class: state.val ? ctx.classes.isTrue : ctx.classes.isFalse,
      },
      content(state.val)
    );
};

const agreementPage = (ctx) => {
  const { van, agreement } = ctx,
    { br, section } = van.tags,
    Show = show(ctx),
    Dialog = dialog(ctx),
    Status = status(ctx),
    AgreementModal = Dialog(
      {
        id: "d1",
        idContent: "c1",
        states: [agreement],
      },
      contentAgreement
    );

  console.log("Agreement");

  return () =>
    section(
      {
        id: "agreement",
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
