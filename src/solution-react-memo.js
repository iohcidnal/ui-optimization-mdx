import * as React from 'react';

import boxStyle from './box-style';
import VeryExpensiveComponent from './very-expensive-component';

export default function SolutionWithReactMemo() {
  const [backgroundColor, setBackgroundColor] = React.useState('');

  return (
    <>
      <label htmlFor="input">Enter my component background color</label>
      <input
        autoComplete="off"
        id="input"
        value={backgroundColor}
        onChange={e => setBackgroundColor(e.target.value)}
      />
      <div style={{ ...boxStyle, backgroundColor }}>My component</div>
      <MemoExpensiveComponent />
    </>
  );
}

const MemoExpensiveComponent = React.memo(function MemoExpensiveComponent() {
  return <VeryExpensiveComponent />;
});
