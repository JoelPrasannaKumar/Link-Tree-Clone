"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName: name, email, password })
    });
    const data = await res.json();
    if (data.success) {
      router.push(`/?handle=${encodeURIComponent(data.firstName)}`);
    } else {
      setError(data.message || "Sign up failed");
    }
  };
  return (
    <div className="min-h-screen pt-40 md:pt-44 flex flex-col items-center justify-center bg-pink-100 w-full">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Sign up free</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm bg-white p-8 rounded-2xl shadow-md">
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required className="rounded-lg border border-gray-300 px-4 py-2 text-lg" />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="rounded-lg border border-gray-300 px-4 py-2 text-lg" />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className="rounded-lg border border-gray-300 px-4 py-2 text-lg" />
        <button type="submit" className="bg-gray-800 text-white font-bold rounded-full px-6 py-2 text-lg hover:bg-gray-900 transition">Sign up free</button>
        {error && <p className="text-red-600 text-center font-semibold mt-2">{error}</p>}
      </form>
    </div>
  );
} 