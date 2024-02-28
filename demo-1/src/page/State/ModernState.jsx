import { useState } from "react";

export default function ModernState() {
  const [state, setState] = useState(0);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setState(state + 1)}>Click</button>
    </div>
  );
}
