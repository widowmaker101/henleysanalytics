"use client";
import { useState } from 'react';
import axios from 'axios';

export default function LlamaInsights() {
  const [file, setFile] = useState<File|null>(null);
  const [insights, setInsights] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const run = async () => {
    if (!file) return;
    setLoading(true);
    const fd = new FormData(); fd.append("file", file);
    try {
      const res = await axios.post("https://henleysanalytics-backend.onrender.com/llama/insights", fd);
      setInsights(res.data.insights);
    } catch (e:any) {
      alert("Llama-3 error — did you add your Groq key on Render?\n\n" + 
            (e.response?.data?.detail || e.message));
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950 text-white p-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-8xl font-black mb-12 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
          Llama-3 Insights
        </h1>
        <p className="text-3xl mb-10">Upload any CSV → Get plain-English analysis instantly</p>

        <div className="bg-slate-900/60 backdrop-blur rounded-3xl p-12 inline-block">
          <input type="file" accept=".csv" onChange={e=>e.target.files&&setFile(e.target.files[0])}
            className="file:mr-6 file:py-6 file:px-12 file:bg-emerald-500 file:text-black file:rounded-full text-xl" />
          <button onClick={run} disabled={loading||!file} className="ml-6 px-16 py-6 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-2xl font-bold">
            {loading ? "Analyzing..." : "Get AI Insights"}
          </button>
        </div>

        {insights && (
          <div className="mt-16 bg-slate-900/90 backdrop-blur-lg rounded-3xl p-12 max-w-4xl mx-auto text-left text-xl leading-relaxed whitespace-pre-line">
            {insights}
          </div>
        )}
      </div>
    </div>
  )
}
