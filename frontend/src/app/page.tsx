"use client";
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  BarChart3, Brain, Zap, Globe, Shield, Rocket, 
  TrendingUp, Sparkles, Cpu, FileText, ArrowRight 
} from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div animate={{ x: [0, 150, 0], y: [0, -150, 0] }} transition={{ duration: 30, repeat: Infinity }} className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl" />
          <motion.div animate={{ x: [-150, 0, 150], y: [150, 0, 150] }} transition={{ duration: 35, repeat: Infinity }} className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/40 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-7xl">
            <motion.h1 className="text-7xl sm:text-8xl md:text-9xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              HENLEYS
            </motion.h1>
            <motion.h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-cyan-300 mt-4">ANALYTICS</motion.h2>
            <motion.p className="text-2xl md:text-3xl text-gray-300 mt-10 max-w-4xl mx-auto">
              The most powerful AI analytics platform built in Africa. <br className="hidden sm:block" />
              Prophet • XGBoost • Llama-3 70B • AutoML • Real-time • No code.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-16 flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/dashboard" className="px-20 py-8 bg-gradient-to-r from-cyan-500 to-purple-600 text-black text-3xl font-black rounded-3xl hover:scale-105 transition shadow-2xl flex items-center gap-4 justify-center">
                Launch Platform <Rocket className="w-10 h-10" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-32 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-6xl font-black text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Everything You Need</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: BarChart3, title: "Time Series Forecasting", desc: "90-day Prophet forecasts with confidence intervals" },
              { icon: Brain, title: "Llama-3 70B Insights", desc: "Ask your data anything in plain English" },
              { icon: Cpu, title: "XGBoost AutoML", desc: "Classification & Regression with SHAP explanations" },
              { icon: TrendingUp, title: "Anomaly Detection", desc: "Real-time outlier identification" },
              { icon: Sparkles, title: "Feature Engineering", desc: "Auto-create lags, rolling stats, interactions" },
              { icon: Globe, title: "Global Deployment", desc: "Vercel + Render = always online" },
            ].map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-3xl border border-cyan-500/20 hover:border-cyan-500 transition">
                <f.icon className="w-16 h-16 text-cyan-400 mb-6" />
                <h3 className="text-3xl font-bold mb-4">{f.title}</h3>
                <p className="text-gray-400 text-lg">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-black text-center">
        <p className="text-2xl text-gray-400">Built with love in Nigeria</p>
        <p className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mt-4">
          The Future of African AI Starts Here
        </p>
      </footer>
    </>
  )
}
