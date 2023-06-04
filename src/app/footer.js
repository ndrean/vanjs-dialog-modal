export default function (ctx) {
  const { van, objStr, classes } = ctx;
  const { footer } = van.tags;
  return function Footer(props, ...children) {
    const { optClass } = props;
    return footer(
      { class: objStr({ [classes.footer]: true, [optClass]: optClass }) },
      children
    );
  };
}
