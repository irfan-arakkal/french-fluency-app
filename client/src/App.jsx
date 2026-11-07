import { useState } from "react";
import "./App.css";

function App() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [level, setLevel] = useState("A1");
  const [result, setResult] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nickname, email, level }),
    });
    const data = await res.json();

    if (res.ok) {
      setResult(`Account created for ${data.nickname} (${data.level})`);
    } else {
      setResult(data.error);
    }
  }

  return (
    <main>
      <h1>French Fluency App</h1>
      <h2>Sign up</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option>A1</option>
          <option>A2</option>
          <option>B1</option>
          <option>B2</option>
          <option>C1</option>
          <option>C2</option>
        </select>
        <button type="submit">Sign up</button>
      </form>

      <p>{result}</p>
    </main>
  );
}

export default App;