export default (ctx) => {
  const {
      van,
      objStr,
      classes: { spanLightBlue, spanPink },
    } = ctx,
    { span } = van.tags;

  return ({ checked }, children) =>
    span(
      { class: objStr({ [spanLightBlue]: checked, [spanPink]: !checked }) },
      children
    );
};
