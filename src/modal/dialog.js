import button from "../button/button";

export default function (ctx) {
  const { van } = ctx,
    { dialog } = van.tags;

  const handleClick = (e, id, states, dialogBox) => {
    e.target.id === id &&
      states.map((st) => (st.val = false)) &&
      dialogBox.close();
  };

  console.log("function Dialog");

  return (props, ...children) => {
    const { id, idContent, states = [], content, ...otherProps } = props,
      [first, ...rest] = children,
      firstContent = first({ ctx, id, idContent, states });

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
