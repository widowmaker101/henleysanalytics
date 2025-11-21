import Link from 'next/link'
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white flex items-center justify-center">
      <div className="text-center px-8">
        <h1 className="text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">HENLEYS</h1>
        <h2 className="text-6xl font-bold mt-4 text-cyan-300">ANALYTICS</h2>
        <p className="text-2xl mt-8">Every predictive model. One platform.</p>
        <Link href="/forecast" className="mt-12 inline-block px-16 py-6 bg-cyan-500 hover:bg-cyan-400 text-black text-2xl font-bold rounded-2xl">
          Launch Prophet Forecast
          <Link href="/xgboost" className="mt-6 inline-block px-16 py-6 bg-gradient-to-r from-orange-500 to-pink-500 text-black text-2xl font-bold rounded-2xl">
            Launch XGBoost
          </Link>
          <Link href="/llama" className="mt-6 inline-block px-16 py-6 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black text-2xl font-bold rounded-2xl">
            Talk to Your Data (Llama-3)
          </Link>

        </Link>
      </div>
    </main>
  )
}
