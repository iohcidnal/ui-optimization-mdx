import * as React from 'react';

import boxStyle from './box-style';
import VeryExpensiveComponent from './very-expensive-component';

export default function SolutionUseChildren() {
  return (
    <AppBackgroundSetter>
      <div style={boxStyle}>My component</div>
      <VeryExpensiveComponent />
    </AppBackgroundSetter>
  );
}

function AppBackgroundSetter({ children }) {
  const [backgroundColor, setBackgroundColor] = React.useState('');

  return (
    <div style={{ backgroundColor }}>
      <label htmlFor="input">Enter app background color</label>
      <input
        autoComplete="off"
        id="input"
        value={backgroundColor}
        onChange={e => setBackgroundColor(e.target.value)}
      />
      {children}
    </div>
  );
}
