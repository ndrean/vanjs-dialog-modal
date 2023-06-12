import dialog, { show } from "../modal/dialog.js";
import contentForm from "./contentForm.js";

const formPage = (ctx) => {
  const { van, formData } = ctx,
    { br, output, section } = van.tags,
    pwd = van.state(""),
    slide = van.state(10),
    Show = show(ctx),
    Dialog = dialog(ctx),
    FormModal = Dialog(
      {
        id: "d2",
        idContent: "f1",
        states: [pwd, slide, formData],
      },
      contentForm
    );

  console.log("function FormPage");

  return () =>
    section(
      {
        id: "form",
        class: ctx.objStr({
          [ctx.classes.layout]: true,
          [ctx.classes.flexDirCol]: true,
        }),
      },
      Show({ id: "d2", label: "Enter you credentials" }),
      FormModal,
      br(),
      output({ id: "output" })
    );
};

export default formPage;
