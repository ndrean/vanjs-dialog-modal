import link from "../link/link";

const homePage = (ctx) => {
  const { van, classes } = ctx;
  const { h1, div, a } = van.tags;
  const Link = link(ctx);
  return div(
    { class: classes.home },
    h1(
      { style: "width:70vw;" },
      "Welcome to this demo app powered by Van.js and routed by Universal-Router"
    ),
    Link(
      {
        href: "https://github.com/FredericHeem/van-kit",
        target: "#",
        name: "source",
      },
      "This work is base on this repo"
    )
  );
};

export default homePage;
