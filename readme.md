# Dia's Library

Install dependencies.

To run the storybook

```console
yarn storybook
```

To export components

```console
yarn build
```

Then you can easily import these components into your project.

package.json :

```json
{
  "dependencies": {
    //...
    "dia-library": "<repo url>"
  }
}
```

And finally, in your project :

```js
import { Button } from "dia-library";
```
