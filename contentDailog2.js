import van from "./van-0.11.10.min.js";
import Form from "./form.js";

const formContent =
  (ctx) =>
  ({ id, idContent, states }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      setOutput(JSON.stringify(data, null, "\t"));
      document.getElementById(idContent).reset();
      document.getElementById(id).close();
    };
    return Form({ ctx, id, idContent, states, handleSubmit });
  };

export default formContent;
