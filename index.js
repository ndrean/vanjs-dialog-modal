import van from "./van-0.11.10.min.js";
import clsx from "./clsx.js";
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
} = van.tags;

const pwd = van.state(""),
  slide = van.state(10),
  agreement = van.state(false);

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

const Header = (ctx) => (content) => {
  console.log(ctx);

  return header(
    h1(
      { style: `color: ${ctx.textColor};background-color: ${ctx.bgColor};` },
      content
    )
  );
};

const content =
  (ctxt) =>
  ({ id, idContent, states }) => {
    const [state, ...rest] = states;
    return div(
      { id: idContent },
      Header(ctxt)("my beauty"),
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

const setOutput = (val) => {
  const output = document.getElementsByTagName("output")[0];
  output.value = val;
};

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

const status = (state) => {
  const content = (r) =>
    r
      ? "I agreed with the terms and conditions"
      : "I denied the terms and conditions";

  return van.bind(state, (value) => content(value));
};

const myFirstDialog = (context = {}) =>
  Dialog({
    id: "d1",
    idContent: "c1",
    inside: "inside1",
    states: [agreement],
    content: content(context),
  });

const myFormDialog = (ctx) =>
  Dialog({
    id: "d2",
    idContent: "f1",
    inside: "inside2",
    states: [pwd, slide],
    content: formContent(ctx),
  });

van.add(
  document.body,
  btnShow("d1"),
  myFirstDialog(context),
  p(agreement),
  status(agreement),
  br(),
  btnOpenForm("d2"),
  myFormDialog(),
  output()
);
