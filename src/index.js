// import van from "./van-0.11.11.min.js";
// import history from "./history";
// import context from "./context.js";
// import router from "./app/routes.js";
// import navbar from "./app/navbar.js";
// import homePage from "./app/home.js";

// const Navbar = navbar(context);
// const HomePage = homePage(context);

// async function renderRoute(location) {
//   console.log("renderRoute", location.pathname);
//   try {
//     const layout = document.getElementById("layout");
//     // "history" returns a path, and "router" finds a match in the routes array
//     const page = await router.resolve({
//       pathname: location.pathname,
//     });
//     console.log("resolve layout", layout.innerHTML);
//     console.log("resolve page", page);
//     // layout.innerHTML = "";
//     // van.add(layout, "");
//     return van.add(layout, page);
//   } catch (err) {
//     console.log(err);
//   }
// }

// van.add(document.body, Navbar(HomePage));
// history.listen(({ location }) => renderRoute(location));
// history.push("/");
