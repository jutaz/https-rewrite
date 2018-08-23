# https-rewrite

> Rewrite URLs to https.

[![NPM](https://img.shields.io/npm/v/https-rewrite.svg)](https://www.npmjs.com/package/https-rewrite) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save https-rewrite
```

## Usage

Currently only `express@^4.0.0` is supported as the engine to perform rewrites in.

### `express`

```js
const redirectToHttps = require('https-rewrite/express');

// ... set up express

// Should be one of the topmost (if not the) middlewares.
app.use(redirectToHttps({
  // Change the status code used to redirect. Defaults to 307.
  status: 301
}))
```


## License

MIT © [jutaz](https://github.com/jutaz)
