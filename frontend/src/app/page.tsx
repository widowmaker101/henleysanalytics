"use client";
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Globe, Brain, Shield, Sparkles, Zap, ArrowRight, 
  Languages, Puzzle, Smartphone, GraduationCap, 
  BarChart3, FileSpreadsheet, Database, Lock
} from 'lucide-react'

const features = [
  { icon: Brain, title: "AI Dashboard Builder", desc: "Drag & drop predictive models → instant interactive dashboards", color: "from-cyan-500 to-blue-600", live: "/dashboard" },
  { icon: Languages, title: "Multilingual Intelligence", desc: "English • Français • Español • العربية • More coming", color: "from-purple-500 to-pink-600" },
  { icon: Puzzle, title: "Integration Marketplace", desc: "Excel • Power BI • Tableau • Salesforce • MTN MoMo • Paystack • Flutterwave", color: "from-emerald-500 to-teal-600" },
  { icon: Smartphone, title: "Mobile App", desc: "iOS & Android • Real-time alerts • Offline sync", color: "from-orange-500 to-red-600" },
  { icon: Shield, title: "Responsible AI", desc: "Bias detection • SHAP/LIME explainability • EU AI Act compliant", color: "from-green-500 to-emerald-600" },
  { icon: GraduationCap, title: "Gamified Learning Hub", desc: "Earn badges • Interactive tutorials • Master AI in 7 days", color: "from-indigo-500 to-purple-600" },
]

export default function Home() {
  return (
    <>
      {/* STICKY NAV */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-2xl border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-4xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            HENLEYS
          </Link>
          <div className="hidden lg:flex items-center gap-10 text-lg">
            <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
            <a href="#integrations" className="text-gray-300 hover:text-white transition">Integrations</a>
            <a href="#responsible" className="text-gray-300 hover:text-white transition">Responsible AI</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
            <a href="#academy" className="text-gray-300 hover:text-white transition">Academy</a>
          </div>
          <div className="flex gap-4">
            <Link href="/dashboard" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold rounded-2xl hover:scale-105 transition shadow-xl">
              Launch Free
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-black relative overflow-hidden pt-32">
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div key={i} animate={{ y: [-200, 1200] }} transition={{ duration: 20 + i*4, repeat: Infinity, delay: i*2 }} className={`absolute left-[${i*12}%] text-5xl font-mono opacity-20 text-cyan-400`}>
              {["█", "▓", "▒", "░", "◆", "◇", "★", "✦"][i]}
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <motion.h1 className="text-7xl sm:text-8xl md:text-9xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent leading-tight">
            HENLEYS
          </motion.h1>
          <motion.h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-white mt-4">ANALYTICS</motion.h2>
          <motion.p className="text-2xl md:text-4xl text-gray-300 mt-12 max-w-5xl mx-auto">
            The world’s first <span className="text-cyan-400 font-bold">AI-native analytics platform</span> with<br />
            drag-and-drop model building, responsible AI, and global integrations.
          </motion.p>

          <motion.div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center">
            <Link href="/dashboard" className="group px-24 py-10 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black text-4xl font-black rounded-3xl hover:scale-110 transition shadow-2xl flex items-center gap-6 justify-center">
              <Sparkles className="w-12 h-12" /> Build Your First Dashboard
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FLAGSHIP FEATURES */}
      <section id="features" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-6xl font-black text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            The Complete AI Analytics Platform
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((f, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="group relative">
                <Link href={f.live || "#"} className="block">
                  <div className={`bg-gradient-to-br ${f.color} p-1 rounded-3xl`}>
                    <div className="bg-black rounded-3xl p-10 h-full backdrop-blur-xl border border-white/10">
                      <f.icon className="w-16 h-16 text-white mb-6" />
                      <h3 className="text-3xl font-bold mb-4">{f.title}</h3>
                      <p className="text-gray-400 text-lg">{f.desc}</p>
                      {f.live && <ArrowRight className="w-8 h-8 mt-6 text-cyan-400 group-hover:translate-x-4 transition" />}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 bg-gradient-to-t from-black to-slate-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-2xl text-gray-400">© 2025 Henleys Analytics — The Global AI Analytics Standard</p>
          <p className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mt-8">
            The Future Is AI-Native
          </p>
        </div>
      </footer>
    </>
  )
}
