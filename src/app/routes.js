import UniversalRouter from "universal-router";
import context from "../context";

const routes = [
  {
    path: "/",
    action: async (context) => {
      const { default: page } = await import("./home");
      return page(context);
    },
  },
  {
    path: "/form",
    action: async (context) => {
      const { default: page } = await import("./form");
      return page(context);
    },
  },
  {
    path: "/agreement",
    action: async (context) => {
      const { default: page } = await import("./agreement");
      return page(context);
    },
  },
  {
    path: "/selections",
    action: async (context) => {
      const { default: page } = await import("./selection");
      return page(context);
    },
  },
  {
    path: "(.*)",
    action: () => "Nothing there",
  },
];

const router = new UniversalRouter(routes, { context });
export default router;
