import van from "./van-0.11.10.min.js";

const { header, article, footer, label, input, div, h1, button } = van.tags;

const Header = (ctx) => (content) =>
  header(h1({ class: ctx.classes.h1 }, content));

const btnAccept = (id) =>
  button(
    {
      onclick: () => document.getElementById(id).close(),
    },
    "Accept"
  );

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

const contentD1 =
  (ctx) =>
  ({ id, idContent, states }) => {
    const [state, ...rest] = states;
    return div(
      { id: idContent },
      Header(ctx)("My beauty"),
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

export default contentD1;
