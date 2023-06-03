export const footer = (ctx) => {
  console.log("inside", ctx);
  const { van, classes } = ctx;
  const { footer } = van.tags;
  return function Footer() {
    return footer({ class: classes.footer });
  };
};
