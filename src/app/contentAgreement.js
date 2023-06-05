import footer from "./footer";
import header from "./header";
import button from "../button/button";

const contentAgreement = ({ ctx, ...props }) => {
  const { van, classes } = ctx;
  const { article, label, input, div } = van.tags;
  const { id, idContent, states } = props;
  const [agreement, ...rest] = states;
  const Footer = footer(ctx);
  const Header = header(ctx);
  const Button = button(ctx);

  const btnClose = (id, state) =>
    Button(
      {
        accent: true,
        raised: true,
        onclick: () => {
          state.val = false;
          document.getElementById(id).close();
        },
      },
      "close"
    );

  const btnAccept = (id) =>
    Button(
      {
        primary: true,
        raised: true,
        onclick: () => document.getElementById(id).close(),
      },
      "Accept"
    );

  return div(
    { id: idContent, classes: classes.layout },
    Header({}, "Check this out! "),
    article(
      { style: "padding:20px;" },
      label(
        input({
          type: "checkbox",
          id: "agreement",
          name: "agreement",
          checked: agreement,
          onchange: (e) => (agreement.val = e.target.checked),
        }),
        "I agree with the terms and conditions"
      )
    ),
    Footer({}, btnClose(id, agreement), btnAccept(id))
  );
};

export default contentAgreement;
