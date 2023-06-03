const Dialog = ({ ctx, ...props }) => {
  const { van } = ctx;
  const { div, dialog } = van.tags;
  const { id, idContent, inside, states = [], content } = props;
  const children = content({ van, ctx, id, idContent, states });
  const dialogBox = dialog({ id }, div({ id: inside }, children));

  dialogBox.addEventListener("click", (e) => {
    if (e.target.id === id) {
      states.map((st) => (st.val = null));

      dialogBox.close();
    }
  });
  return dialogBox;
};

export default Dialog;
