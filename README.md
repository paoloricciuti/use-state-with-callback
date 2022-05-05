# use-state-with-callback

> Run your code after a setState has been executed

[![NPM](https://img.shields.io/npm/v/use-state-with-callback.svg)](https://www.npmjs.com/package/use-state-with-callback) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-state-with-callback
```

## Usage

```tsx
import React from 'react';

import { useStateWithCallback } from 'use-state-with-callback';

const App = () => {
    const [state, setState] = useStateWithCallback(0);
    const [otherState, setOtherState] = useState(0);
    return (
        <>
            <div>
                The other state changed {otherState} times.
            </div>
            <div>The main state: {state}</div>
            <button onClick={() => {
                setState(prev => prev + 1);
            }}>Change without callback</button>
            <button onClick={() => {
                setState(prev => prev + 1, () => {
                    setOtherState(prev => prev + 1);
                });
            }}>Change with callback</button>
        </>
    );
};
export default App;

```

## License

MIT © [paoloricciuti](https://github.com/paoloricciuti)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
