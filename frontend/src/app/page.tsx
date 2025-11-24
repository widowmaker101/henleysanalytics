"use client";
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  BarChart3, Brain, Zap, Globe, Rocket, ArrowRight, 
  Play, Sparkles, TrendingUp, Users, MessageSquare, BookOpen
} from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* STICKY NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <Link href="/" className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent bg-clip-text">
            HENLEYS
          </Link>
          <div className="hidden md:flex items-center gap-10 text-lg">
            <Link href="#features" className="text-gray-300 hover:text-white transition">Features</Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</Link>
            <Link href="#docs" className="text-gray-300 hover:text-white transition">Docs</Link>
            <Link href="#community" className="text-gray-300 hover:text-white transition">Community</Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition">Contact</Link>
          </div>
          <div className="flex gap-4">
            <Link href="/dashboard" className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition">
              Try Free
            </Link>
            <Link href="#demo" className="px-8 py-3 border border-purple-500 text-white hover:bg-purple-500/20 rounded-xl transition hidden sm:block">
              Book Demo
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO WITH ANIMATED DATA STREAM */}
      <section className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden pt-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [-100, 1000], opacity: [0, 1, 0] }}
              transition={{ duration: 15 + i * 3, repeat: Infinity, delay: i * 2 }}
              className="absolute left-[${i*15}%] text-cyan-400/20 text-6xl font-mono"
            >
              {Math.random().toFixed(4)}
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-7xl">
            <motion.h1 className="text-7xl sm:text-8xl md:text-9xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              HENLEYS
            </motion.h1>
            <motion.h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-cyan-300 mt-4">ANALYTICS</motion.h2>
            <motion.p className="text-2xl md:text-4xl text-gray-300 mt-12 max-w-5xl mx-auto leading-relaxed">
              The world’s most advanced no-code AI analytics platform.<br />
              Used by Fortune 500 data teams and startups alike.
            </motion.p>

            <motion.div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center">
              <Link href="/forecast" className="group px-20 py-8 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black text-3xl font-black rounded-3xl hover:scale-110 transition shadow-2xl flex items-center gap-4 justify-center">
                <Play className="w-10 h-10" /> Live Prophet Demo
              </Link>
              <Link href="/xgboost" className="group px-20 py-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-3xl font-black rounded-3xl hover:scale-110 transition shadow-2xl ring-4 ring-purple-500/50 flex items-center gap-4 justify-center">
                <Sparkles className="w-10 h-10" /> XGBoost Playground
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* LIVE DEMO SECTION */}
      <section id="features" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-6xl font-black mb-20 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience It Live — No Sign-Up
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div whileHover={{ scale: 1.03 }} className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 border border-cyan-500/30">
              <BarChart3 className="w-20 h-20 text-cyan-400 mx-auto mb-8" />
              <h3 className="text-4xl font-bold mb-6">Prophet Forecasting Sandbox</h3>
              <p className="text-xl text-gray-400 mb-10">Upload or type time-series data → get 90-day forecast instantly</p>
              <Link href="/forecast" className="inline-flex items-center gap-3 px-10 py-5 bg-cyan-500 text-black font-bold rounded-2xl hover:bg-cyan-400 transition">
                Open Live Demo <ArrowRight />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-3xl p-12 border border-purple-500/30">
              <Brain className="w-20 h-20 text-purple-400 mx-auto mb-8" />
              <h3 className="text-4xl font-bold mb-6">XGBoost + SHAP Playground</h3>
              <p className="text-xl text-gray-400 mb-10">Drag & drop any CSV → train model + see feature importance live</p>
              <Link href="/xgboost" className="inline-flex items-center gap-3 px-10 py-5 bg-purple-500 text-white font-bold rounded-2xl hover:bg-purple-400 transition">
                Open Live Demo <ArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GLOBAL FOOTER */}
      <footer className="py-24 bg-gradient-to-t from-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Henleys Analytics</h3>
            <p className="text-gray-400">The global standard in AI-powered analytics.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">Product</h4>
            <ul className="space-y-3 text-gray-400"><li><Link href="#features">Features</Link></li><li><Link href="#pricing">Pricing</Link></li></ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 text-gray-400"><li><Link href="#docs">Documentation</Link></li><li><Link href="#community">Community</Link></li></ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400"><li><Link href="#contact">Contact</Link></li><li>Privacy</li></ul>
          </div>
        </div>
        <div className="text-center mt-16 text-gray-500">
          © 2025 Henleys Analytics. All rights reserved.
        </div>
      </footer>
    </>
  )
}
