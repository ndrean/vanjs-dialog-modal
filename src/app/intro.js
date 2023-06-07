import link from "../link/link";

const intro = (ctx) => {
  const { van } = ctx;
  const { div, br, h1, h2, hr } = van.tags;
  const Link = link(ctx);
  return () =>
    div(
      h2(
        { style: "width:70vw;" },
        "Welcome to this demo app. It is powered by VanJS, routed by Universal-Router. It uses the CONTEXT object as a global store."
      ),
      br(),
      h1({ style: "text-align: center;" }, "You can navigate!"),
      hr(),
      br(),
      div(
        { style: "display: flex; justify-content: center;" },
        Link(
          {
            href: "https://github.com/FredericHeem/van-kit",
            target: "#",
            name: "source",
          },
          "This work is based on this repo"
        )
      )
    );
};

export default intro;
