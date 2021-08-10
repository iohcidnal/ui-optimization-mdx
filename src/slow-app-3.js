import * as React from 'react';

export default function SlowApp3() {
  return (
    <CountProvider>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'flex-start',
          width: 500,
        }}
      >
        <CounterA />
        <CounterB />
      </div>
    </CountProvider>
  );
}

const CountContext = React.createContext();

function CountProvider({ children }) {
  const [countA, setCountA] = React.useState(0);
  const [countB, setCountB] = React.useState(0);
  const value = React.useMemo(
    () => ({ countA, countB, setCountA, setCountB }),
    [countA, countB]
  );

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
}

function CounterA() {
  console.log('Rendering Counter A...');
  const { countA, setCountA } = React.useContext(CountContext);

  return (
    <div>
      <div>Counter A: {countA}</div>
      <button onClick={() => setCountA(countA + 1)}>+ 1</button>
    </div>
  );
}

function CounterB() {
  console.log('Rendering Counter B...');
  const { countB, setCountB } = React.useContext(CountContext);

  return (
    <div>
      <div>Counter B: {countB}</div>
      <button onClick={() => setCountB(countB + 1)}>+ 1</button>
    </div>
  );
}
