export default (ctx) => {
  const {
    van,
    objStr,
    classes: { spanLightBlue, spanPink },
  } = ctx;
  const { span } = van.tags;

  return function Truthy(props, children) {
    console.log("thruthy");
    const { checked } = props;
    return span(
      { class: objStr({ [spanLightBlue]: checked, [spanPink]: !checked }) },
      children
    );
  };
};
