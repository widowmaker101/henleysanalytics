import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden relative">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [-100, 0, 100], y: [100, 0, 100] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-6xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-8xl md:text-9xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent leading-tight"
          >
            HENLEYS
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-6xl md:text-8xl font-black text-cyan-300 mt-4"
          >
            ANALYTICS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-2xl md:text-3xl text-gray-300 mt-10 max-w-3xl mx-auto"
          >
            Prophet • XGBoost • Llama-3 70B — All in one platform. No code. No limits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex flex-col items-center gap-8"
          >
            <Link href="/forecast" className="group relative px-16 py-7 bg-cyan-500 hover:bg-cyan-400 text-black text-3xl font-black rounded-3xl transition transform hover:scale-105 shadow-2xl">
              <span className="relative z-10">Launch Prophet Forecast</span>
              <motion.div className="absolute inset-0 bg-white/20 rounded-3xl" whileHover={{ scale: 1.2 }} transition={{ duration: 0.4 }} />
            </Link>

            <Link href="/xgboost" className="group px-16 py-7 bg-gradient-to-r from-orange-500 to-pink-600 text-black text-3xl font-black rounded-3xl transition transform hover:scale-105 shadow-2xl">
              Launch XGBoost Lab
            </Link>

            <Link href="/llama" className="group px-16 py-7 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black text-3xl font-black rounded-3xl transition transform hover:scale-105 shadow-2xl">
              Talk to Your Data (Llama-3)
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
