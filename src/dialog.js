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
