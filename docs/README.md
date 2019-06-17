# VTEX Landing Pages

All landing pages served by VTEX Render.

To start hacking:

Clone this repo and go into the project folder:

```bash
git clone git@github.com:vtex-apps/landing-pages.git
cd landing-pages
```

Log into the `vtexpages` account using the VTEX Toolbelt:

```bash
npm i -g vtex
vtex login -a vtexpages
```

_(Don't have access? Ask for help at #vtex-io-help and we'll add you to this account.)_

Create a new workspace:

```bash
vtex use draft
```

_PROTIP: You don't have to call it `draft`. Make it personal! Maybe use your first name._

Finally, link this app:

```bash
vtex link --verbose
```

The toolbelt should output all the available routes from this app, so just open one of them and edit the corresponding file, as configured in `store/routes.json`.
