import van from "./van-0.11.10.min.js";
const { div, dialog } = van.tags;

const Dialog = ({ id, idContent, inside, states = [], content }) => {
  //   const [state, ...rest] = states;
  const inner = () => content({ id, idContent, states });
  const dialogBox = dialog({ id }, div({ id: inside }, inner()));

  dialogBox.addEventListener("click", (e) => {
    if (e.target.id === id) {
      states.map((st) => (st.val = false));
      dialogBox.close();
    }
  });
  return dialogBox;
};

export default Dialog;
