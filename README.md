# Ted Marov Portfolio

[View the live portfolio](https://tedmarov.github.io)

A responsive, single-page portfolio for Ted Marov, presenting a generalist approach to software development, selected work, background, and toolkit.

## Features

- Responsive layout with in-page navigation for Work, About, and Toolkit.
- Light and dark themes, with the first visit following the system preference and manual choices saved in local storage.
- DarkPaladin1 artwork layered into the page background and used for the social preview image.
- Separate foreground portrait and project imagery.

## Technology

The site is built with static HTML, CSS, and JavaScript. It has no package installation or build step; the page and its supporting assets are served directly.

The original template behaviors use jQuery with local Scrolly, Scrollex, and Breakpoints scripts. Font Awesome supplies the icons.

## Run locally

From the repository root, start a local HTTP server:

```sh
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000). A local server keeps relative asset paths working as they do on GitHub Pages.

## Project files

- `index.html` contains the page content and metadata.
- `assets/css/main.css` contains the base template styles.
- `assets/css/theme-dark.css` contains the portfolio layout, theme colors, and background treatments.
- `assets/js/main.js` provides the template's scrolling and responsive navigation behavior.
- `assets/js/theme-toggle.js` controls theme selection and persistence.
- `assets/css/images/` contains the portrait and project images.
- `assets/images/DarkPaladin1.jpg` contains the shared background and social-preview artwork.
- `assets/sass/` contains the template Sass sources.

## Publishing

The portfolio is intended to be served from the repository root with GitHub Pages. Select the publishing branch and root directory in the repository's Pages settings; no build command is required.

## Credits and licensing

The original Prologue template is by [HTML5 UP](https://html5up.net/prologue) and is licensed under Creative Commons Attribution 3.0 Unported; see `LICENSE.txt`. Portfolio code and content are covered by the MIT license in `LICENSE`. The site also uses jQuery, Scrolly, Scrollex, Breakpoints, and Font Awesome.
