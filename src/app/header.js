export default function (ctx) {
  const { van, objStr, classes } = ctx,
    { header, h1 } = van.tags;

  // function Header
  return ({ optClass }, ...children) =>
    header(
      h1(
        { class: objStr({ [classes.h1]: true, [optClass]: optClass }) },
        children
      )
    );
}
