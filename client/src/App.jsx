import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>French Fluency App</h1>
      <p>Practice speaking French with learners at your level.</p>
      <button onClick={() => setCount(count + 1)}>
        Practice sessions: {count}
      </button>
    </main>
  );
}

export default App;