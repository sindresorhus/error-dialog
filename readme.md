# error-dialog

> Display an error in a GUI dialog

<img src="screenshot.png" width="532">

macOS only, but pull request welcome for Linux and Windows support.


## Install

```
$ npm install --save error-dialog
```


## Usage

```js
const errorDialog = require('error-dialog');
const error = new Error('Expected more unicorns!');

errorDialog(error, '🦄');
```


## API

### errorDialog(error, [windowTitle])

Returns a `Promise`.

#### error

Type: `Error` `string`

Error object or message.

#### windowTitle

Type: `string`


## Related

- [cocoa-dialog](https://github.com/sindresorhus/cocoa-dialog) - Display common GUI dialogs on macOS


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
