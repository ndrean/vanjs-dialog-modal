export default function (ctx) {
  const { van, objStr, classes } = ctx,
    { footer } = van.tags;

  //  function Fotter
  return (props, ...children) => {
    const { optClass } = props;
    return footer(
      { class: objStr({ [classes.footer]: true, [optClass]: optClass }) },
      children
    );
  };
}
