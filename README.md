# use-state-with-callback

> Run your code after a setState has been executed

[![NPM](https://img.shields.io/npm/v/use-state-with-callback.svg)](https://www.npmjs.com/package/use-state-with-callback) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-state-with-callback
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'use-state-with-callback'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [paoloricciuti](https://github.com/paoloricciuti)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
