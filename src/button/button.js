import "../index.css";

export default function (ctx) {
  const { van, objStr, classes } = ctx;
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
          [classes.fullWidth]: fullWidth,
          [classes.disabled]: disabled,
          [classes.raised]: raised,
          [classes.primary]: primary,
          [classes.ripple]: ripple,
          [classes.accent]: accent,
        }),
        ...otherProps,
      },
      children
    );
  };
}
