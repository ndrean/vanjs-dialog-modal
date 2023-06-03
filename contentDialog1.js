const contentD1 = ({ ctx, ...props }) => {
  const { van, classes } = ctx;
  const { article, label, input, div, button, footer, header, h1 } = van.tags;
  const { id, idContent, states } = props;
  const [state, ...rest] = states;

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
        onclick: () => {
          document.getElementById(id).close();
        },
      },
      "Accept"
    );

  return div(
    { id: idContent },
    header(h1({ class: classes.h1 }, "My beauty")),
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
    footer({ class: classes.footer }, btnClose(id, state), btnAccept(id))
  );
};

export default contentD1;
