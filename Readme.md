# Explore Van.js

A [VanJS](https://vanjs.org/) powered demo app, with routing. No CSS-in-JS.

Mainly featuring a **Modal** component (`<Dialog>`) heavily following [this model](https://github.com/FredericHeem/van-kit).

> To enable the "click-out", you need to pass an ID to the dialog.

## Features

- Navigation powered by [Universal Router](https://github.com/kriasoft/universal-router) with async loading.
- Modal (`<dialog>`) components with forms.
- Example with `<Select>`.
- The state is passed into the `context`object, thus updated on each component update (new navigation page).
- No CSS in JS.
- Vite bundled: 5.2k +

- :exclamation: Datalist not yet available.

## Display

- The build is deployed with [Surge](https://surge.sh/) at <https://van-modal.surge.sh>

- To use Codesanbox, insert "box" in the current url: <https://githubbox.com/ndrean/vanjs-dialog-modal>

- The Dev mode is powered by Vite. To display on mobile on the same WIFI: server it, and open it.

```bash
npm run build
http-server ./dist -b 0.0.0.0 -p 8080
```

and navigate with the mobile to <http://127.0.0.1:8080>
