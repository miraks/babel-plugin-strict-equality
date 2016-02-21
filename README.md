# babel-plugin-strict-equality

Transform `==` and `!=` to `===` and `!==`


## Installation

```sh
$ npm install --save-dev babel-plugin-strict-equality
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```js
{
  "plugins": ["strict-equality"]
}
```

### Via CLI

```sh
$ babel --plugins strict-equality script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["strict-equality"]
});
```

# License

MIT
