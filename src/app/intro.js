import link from "../link/link";
import vanLogo from "../../vanjs.svg";

const intro = (ctx) => {
  const { van } = ctx,
    { div, br, h1, h2, hr, img } = van.tags,
    Link = link(ctx);

  console.log("fucntion Intro");

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
      ),
      br(),
      div(
        { style: "text-align:center;" },
        img({ src: vanLogo, alt: "VanJS", style: "height:100px;width:100px;" })
      )
    );
};

export default intro;
