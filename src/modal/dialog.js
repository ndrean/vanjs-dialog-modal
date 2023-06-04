import button from "../button/button";

export default function (ctx) {
  const { van } = ctx;
  const { dialog } = van.tags;

  return function Dialog(props) {
    const { id, idContent, states = [], content, ...otherProps } = props;
    const children = content({ ctx, id, idContent, states });
    const dialogBox = dialog({ id, ...otherProps }, children);

    dialogBox.addEventListener("click", (e) => {
      if (e.target.id === id) {
        states.map((st) => (st.val = null));
        dialogBox.close();
      }
    });

    return () => dialogBox;
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
