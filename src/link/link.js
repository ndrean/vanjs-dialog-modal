export default function (ctx) {
  const { van, classes, objStr } = ctx;
  const { a } = van.tags;

  return function Link(props, ...children) {
    const { href, target, name, handleClick, state, ...otherProps } = props;
    return a(
      {
        class: objStr({ [classes.linkNav]: true, active: state }),
        href: href,
        target: target || "_self",
        role: "link",
        name: name,
        onclick: handleClick || (() => null),
        ...otherProps,
      },
      children
    );
  };
}