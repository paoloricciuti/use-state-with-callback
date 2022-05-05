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
