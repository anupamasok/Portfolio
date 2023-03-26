## Portfolio

This project uses `eleventy` and `tailwind`. `nunjuks` is used for templating
along with `eleventy`.

The contents in the `src` folder are considered by `eleventy` as the source and
outputted to `public` folder. The public folder is served in the HTTP server.

Tailwind uses `src/styles.css` as the source and outputs the final styles to
`public/css/styles.css`. The final HTML uses this stylesheet.

The cloud flare build for `eleventy` and npm is failing due to some reason. As a
stop gap, the compiled public folder is used to serve the HTML directly in
`cloudflare`. In order to avoid assets duplication it is kept directly inside
the public folder for now.

The button style is `neomorphic`. It is implemented using
[tailwindcss-neumorphism](https://github.com/sambeevors/tailwindcss-neumorphism)
plugin.

## Commands

### local testing

Runs an HTML server in `localhost:8080` and watches for changes in style.css and
the HTML files.

For quick runs use.

```bash
npm run dev
```

For Development run the commands separately

```bash
npm run serve # for eleventy server
npm run watch # for continuous builds using tailwind
```

### prod

```bash
npm run prodServe
```
