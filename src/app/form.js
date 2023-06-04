import dialog, { show } from "../modal/dialog.js";
import contentForm from "./contentForm.js";

const formPage = (ctx) => {
  const { van } = ctx;
  const { div, br, output } = van.tags;

  const pwd = van.state(""),
    slide = van.state(10);

  const Show = show(ctx);
  const Dialog = dialog(ctx);
  const FormModal = Dialog({
    id: "d2",
    idContent: "f1",
    states: [pwd, slide],
    content: contentForm,
  });

  return div(
    {
      class: ctx.objStr({
        [ctx.classes.layout]: true,
        [ctx.classes.flexDirCol]: true,
      }),
    },
    Show({ id: "d2", label: "Enter you credentials" }),
    // div(
    //   { class: context.classes.btnDiv },
    // ),
    FormModal(),
    br(),
    output({ id: "output" })
  );
};

export default formPage;
