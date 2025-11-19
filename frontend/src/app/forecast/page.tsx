"use client";
import { useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Forecast() {
  const [file, setFile] = useState<File|null>(null);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const run = async () => {
    if (!file) return;
    setLoading(true);
    const fd = new FormData(); fd.append("file", file);
    const res = await axios.post("http://localhost:8001/prophet/forecast", fd);
    setData(res.data.forecast.map((r:any) => ({
      date: new Date(r.ds).toLocaleDateString(),
      forecast: Math.round(r.yhat),
      lower: Math.round(r.yhat_lower),
      upper: Math.round(r.yhat_upper)
    })));
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white p-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-7xl font-black mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Prophet Forecast
        </h1>
        <input type="file" accept=".csv" onChange={e=>e.target.files&&setFile(e.target.files[0])}
          className="file:mr-4 file:py-4 file:px-8 file:bg-cyan-500 file:text-black file:rounded-full" />
        <button onClick={run} disabled={loading} className="mx-4 px-12 py-4 bg-purple-600 rounded-full text-xl font-bold">
          {loading?"Running...":"Forecast 90 Days"}
        </button>
        {data.length>0 && (
          <div className="mt-12 bg-slate-900/80 backdrop-blur rounded-3xl p-8">
            <ResponsiveContainer width="100%" height={500}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="forecast" stroke="#8b5cf6" strokeWidth={4} />
                <Line type="monotone" dataKey="lower" stroke="#06b6d4" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="upper" stroke="#06b6d4" strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  )
}
