"use client";
import { useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function XGBoost() {
  const [file, setFile] = useState<File|null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<"classify"|"regress">("classify");

  const run = async () => {
    if (!file) return;
    setLoading(true);
    const fd = new FormData(); fd.append("file", file);
    try {
      const res = await axios.post(`https://henleysanalytics-backend.onrender.com/xgboost/${type}`, fd);
      setResult(res.data);
    } catch (e:any) { alert(e.response?.data?.detail || "Error") }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-8xl font-black mb-12 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent text-center">
          XGBoost {type === "classify" ? "Classification" : "Regression"}
        </h1>

        <div className="bg-slate-900/60 backdrop-blur rounded-3xl p-10 text-center">
          <div className="flex justify-center gap-8 mb-8">
            <button onClick={()=>setType("classify")} className={`px-10 py-4 rounded-full text-xl font-bold ${type==="classify"?"bg-orange-500":"bg-gray-700"}`}>Classification</button>
            <button onClick={()=>setType("regress")} className={`px-10 py-4 rounded-full text-xl font-bold ${type==="regress"?"bg-pink-500":"bg-gray-700"}`}>Regression</button>
          </div>
          <input type="file" accept=".csv" onChange={e=>e.target.files&&setFile(e.target.files[0])} 
            className="file:mr-6 file:py-6 file:px-12 file:bg-cyan-500 file:text-black file:rounded-full text-xl" />
          <button onClick={run} disabled={loading|| !file} className="ml-6 px-16 py-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-2xl font-bold disabled:opacity-50">
            {loading?"Running...":"Run XGBoost"}
          </button>
        </div>

        {result && (
          <div className="mt-16 bg-slate-900/80 backdrop-blur rounded-3xl p-10">
            <h2 className="text-4xl font-bold mb-6 text-center">
              {type==="classify" ? `Accuracy: ${(result.accuracy*100).toFixed(2)}%` : `MSE: ${result.mse.toFixed(4)}`}
            </h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={result.predictions.slice(0,20).map((p:number,i:number)=>({i, value: Number(p.toFixed(2))}))}>
                <XAxis dataKey="i" stroke="#ccc"/>
                <YAxis stroke="#ccc"/>
                <Tooltip contentStyle={{background:"#111"}}/>
                <Bar dataKey="value" fill={type==="classify"?"#f97316":"#ec4899"} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  )
}
