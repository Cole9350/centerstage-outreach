# Center Stage Outreach Team Website

This is the official website for Center Stage Outreach Team Inc, a 501(c)(3) non-profit organization committed to positively impacting lives through dance, giving back, kindness, unity & leadership.

## 🚀 Project Structure

The website is built using [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Here's an overview of the project structure:

```
/
├── .cursor/
│   └── rules/
│       ├── team-pages.mdc
│       ├── team-images.mdc
│       └── team-navigation.mdc
├── public/
│   ├── images/
│   │   ├── CSDA-Outreach-Logo.png
│   │   └── 2022-23-Outreach-no-logo.jpg
│   ├── favicon.png
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Navigation.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about/
│   │   │   ├── index.astro
│   │   │   ├── board.astro
│   │   │   ├── staff.astro
│   │   │   └── members.astro
│   │   ├── programs.astro
│   │   ├── performances.astro
│   │   ├── gallery.astro
│   │   ├── sponsors.astro
│   │   ├── contact.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css
├── .env
├── .gitignore
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :----------------------- | :----------------------------------------------- |
| `npm install`            | Installs dependencies                            |
| `npm run dev`            | Starts local dev server at `localhost:4321`      |
| `npm run build`          | Build your production site to `./dist/`          |
| `npm run preview`        | Preview your build locally, before deploying     |
| `npm run astro ...`      | Run CLI commands like `astro add`, `astro check`|

## 👀 Want to learn more?

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🔒 Environment Variables

The project uses the following environment variables:

```env
PUBLIC_SITE_URL=https://centerstageoutreach.org
```

Create a `.env` file in the root directory and add these variables.

## 📝 License

Copyright © 2024 Center Stage Outreach Team Inc. All rights reserved.

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
