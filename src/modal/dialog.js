import button from "../button/button";

export default function (ctx) {
  const { van } = ctx;
  const { dialog } = van.tags;

  function handleClick(e, id, states, dialogBox) {
    if (e.target.id === id) {
      states.map((st) => (st.val = null));
      dialogBox.close();
    }
  }

  return function Dialog(props, ...children) {
    const { id, idContent, states = [], content, ...otherProps } = props;
    const [first, ...rest] = children;
    const firstContent = first({ ctx, id, idContent, states });
    const dialogBox = dialog(
      {
        id,
        onclick: (e) => handleClick(e, id, states, dialogBox),
        ...otherProps,
      },
      firstContent,
      rest
    );

    return dialogBox;
  };
}

const show = (ctx) => {
  const Button = button(ctx);
  return ({ id, label }) =>
    Button(
      {
        primary: true,
        raised: true,
        ripple: true,
        onclick: () => document.getElementById(id).showModal(),
      },
      label
    );
};

export { show };
