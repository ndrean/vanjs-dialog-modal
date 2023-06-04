import van from "./van-0.11.11.min.js";
import context from "./context.js";
import dialog, { show } from "./dialog.js";
import contentForm from "./contentForm.js";

const { div, br, output } = van.tags;

const pwd = van.state(""),
  slide = van.state(10);

const Show = show(context);
const Dialog = dialog(context);

const FormModal = Dialog({
  id: "d2",
  idContent: "f1",
  states: [pwd, slide],
  content: contentForm,
});

const formPage = (ctx) =>
  div(
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

export default formPage;
