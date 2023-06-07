export default function (ctx) {
  const { van, classes } = ctx;
  const { a } = van.tags;

  return function Link(props, ...children) {
    const { href, target, name, handleClick, ...otherProps } = props;

    return a(
      {
        "aria-current": props.ariaCurrent || "",
        href,
        target: target || "_self",
        role: "link",
        class: classes.linkNav,
        name: name,
        onclick: handleClick || (() => null),
        ...otherProps,
      },
      children
    );
  };
}
