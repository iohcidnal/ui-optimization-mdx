import * as React from 'react';

export default function SolutionSubContexts() {
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

const CountAContext = React.createContext();
const CountBContext = React.createContext();

function CountProvider({ children }) {
  const [countA, setCountA] = React.useState(0);
  const [countB, setCountB] = React.useState(0);

  const valueA = React.useMemo(() => ({ countA, setCountA }), [countA]);
  const valueB = React.useMemo(() => ({ countB, setCountB }), [countB]);

  return (
    <CountAContext.Provider value={valueA}>
      <CountBContext.Provider value={valueB}>{children}</CountBContext.Provider>
    </CountAContext.Provider>
  );
}

function CounterA() {
  console.log('Rendering Counter A...');
  const { countA, setCountA } = React.useContext(CountAContext);

  return (
    <div>
      <div>Counter A: {countA}</div>
      <button onClick={() => setCountA(countA + 1)}>+ 1</button>
    </div>
  );
}

function CounterB() {
  console.log('Rendering Counter B...');
  const { countB, setCountB } = React.useContext(CountBContext);

  return (
    <div>
      <div>Counter B: {countB}</div>
      <button onClick={() => setCountB(countB + 1)}>+ 1</button>
    </div>
  );
}
