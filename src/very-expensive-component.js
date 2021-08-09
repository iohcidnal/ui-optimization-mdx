import * as React from 'react';
import boxStyle from './box-style';

export default function VeryExpensiveComponent() {
  console.log('Rendering expensive component...');
  const now = performance.now();
  while (performance.now() - now < 400) {
    // delay 400ms
  }
  return (
    <div
      style={{
        ...boxStyle,
        borderColor: 'red',
      }}
    >
      Expensive component
    </div>
  );
}
