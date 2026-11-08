import { useState } from "react";
import "./App.css";

function App() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [level, setLevel] = useState("A1");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false); // new (Fix 3)

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true); // new (Fix 3)

    try { // new (Fix 2)
      const res = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nickname, email, level }),
      });
      const data = await res.json();

      if (res.ok) {
        setResult(`Account created for ${data.nickname} (${data.level})`);
        setNickname(""); // new (Fix 1)
        setEmail(""); // new (Fix 1)
        setLevel("A1"); // new (Fix 1)
      } else {
        setResult(data.error);
      }
    } catch { // new (Fix 2)
      setResult("Could not reach the server. Is it running?");
    } finally { // new (Fix 3)
      setLoading(false);
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
        <button type="submit" disabled={loading}> {/* new (Fix 3) */}
          {loading ? "Signing up..." : "Sign up"}
        </button>
      </form>

      <p>{result}</p>
    </main>
  );
}

export default App;