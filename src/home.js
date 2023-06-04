const homePage = (ctx) => {
  const { van } = ctx;
  const { h1, div, a } = van.tags;
  return div(
    h1(
      { style: "width:70vw;" },
      "Welcome to this demo app powered by Van.js and routed by Universal-Router"
    ),
    a(
      { href: "https://github.com/FredericHeem/van-kit", target: "#" },
      "This work is base on this repo"
    )
  );
};

export default homePage;
