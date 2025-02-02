```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    // Correct way to compare previous state using useRef
    if (count !== prevCountRef.current) {
      console.log('Count changed from', prevCountRef.current, 'to', count);
    }
    prevCountRef.current = count; // Update the previous count for the next render
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```