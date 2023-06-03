import "./index.css";
import "./defer.css";

export default function (ctx) {
  const { van, objStr } = ctx;
  const { button } = van.tags;

  return function Button(props, ...children) {
    const {
      fullWidth,
      label,
      primary,
      accent,
      raised,
      disabled,
      ripple,
      ...otherProps
    } = props;

    return button(
      {
        class: objStr({
          fullWidth,
          disabled,
          raised,
          ripple,
          primary,
          accent,
        }),
        ...otherProps,
      },
      children
    );
  };
}
