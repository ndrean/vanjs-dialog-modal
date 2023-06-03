export default function (ctx) {
  const { van, objStr, classes } = ctx;
  const { header, h1 } = van.tags;
  return function Header(props, ...children) {
    const { optClass } = props;
    return header(
      h1(
        { class: objStr({ [classes.h1]: true, [optClass]: optClass }) },
        children
      )
    );
  };
}
