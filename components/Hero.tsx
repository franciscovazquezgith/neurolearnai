"use client";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Brain, Zap } from "lucide-react";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-bg">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-brand-cyan/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-brand-purple/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — text */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <motion.div {...fadeUp(0.1)} className="inline-flex">
              <span className="glass-card inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-brand-cyan font-medium">
                <Sparkles size={14} className="text-brand-cyan" />
                Inteligencia Artificial Educativa
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 {...fadeUp(0.2)} className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight">
              El primer sistema de{" "}
              <span className="text-gradient">aprendizaje</span> que evoluciona{" "}
              <span className="relative">
                contigo
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8 Q75 2 150 8 Q225 14 298 8" stroke="url(#u1)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="u1" x1="0" y1="0" x2="300" y2="0">
                      <stop stopColor="#4A6CF7"/>
                      <stop offset="1" stopColor="#06B6D4"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              .
            </motion.h1>

            {/* Subtitle */}
            <motion.p {...fadeUp(0.3)} className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-xl">
              NeuroLearn AI analiza cómo aprendes y crea un camino educativo único para maximizar tu rendimiento.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4">
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-semibold text-sm hover:opacity-90 transition-all glow-blue"
              >
                Probar Beta gratis
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass-card text-white font-semibold text-sm hover:bg-white/5 transition-all">
                <div className="w-7 h-7 rounded-full bg-gradient-to-r from-brand-blue/30 to-brand-cyan/30 flex items-center justify-center">
                  <Play size={12} fill="white" />
                </div>
                Ver Demo
              </button>
            </motion.div>

            {/* Social proof */}
            <motion.div {...fadeUp(0.5)} className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {["A","B","C","D"].map((l, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#060B15] bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center text-xs font-bold">
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400 text-xs gap-0.5">{"★★★★★"}</div>
                <p className="text-xs text-gray-500"><span className="text-white font-semibold">+15.000</span> estudiantes en beta</p>
              </div>
            </motion.div>
          </div>

          {/* Right — mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[420px] h-[420px] rounded-full border border-brand-blue/20 animate-ping" style={{ animationDuration: "3s" }} />
            </div>

            {/* Main card */}
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              {/* App mockup card */}
              <div className="glass-card rounded-3xl p-6 w-[360px] md:w-[420px] glow-blue">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="logo" width={32} height={32} className="rounded-lg" />
                    <span className="font-semibold text-sm">NeuroLearn AI</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-green-500/20 text-green-400 font-medium">● Live</span>
                </div>

                {/* Progress ring visual */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                      <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(74,108,247,0.15)" strokeWidth="6" />
                      <circle cx="40" cy="40" r="32" fill="none" stroke="url(#pg)" strokeWidth="6"
                        strokeDasharray="201" strokeDashoffset="50" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="pg" x1="0" y1="0" x2="1" y2="0">
                          <stop stopColor="#4A6CF7"/>
                          <stop offset="1" stopColor="#06B6D4"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gradient">75%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Progreso semanal</p>
                    <p className="text-sm font-semibold">Matemáticas</p>
                    <p className="text-xs text-gray-400 mt-1">Álgebra lineal · Cap 4</p>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { label: "Racha", value: "12 días", icon: "🔥" },
                    { label: "XP hoy", value: "+340", icon: "⚡" },
                    { label: "Nivel", value: "Pro", icon: "🧠" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/5 rounded-xl p-2.5 text-center">
                      <div className="text-base mb-0.5">{s.icon}</div>
                      <div className="text-xs font-bold">{s.value}</div>
                      <div className="text-[10px] text-gray-500">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* AI suggestion */}
                <div className="bg-gradient-to-r from-brand-blue/10 to-brand-cyan/10 rounded-xl p-3 border border-brand-blue/20">
                  <div className="flex items-start gap-2">
                    <Brain size={14} className="text-brand-cyan mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-brand-cyan mb-0.5">IA sugiere</p>
                      <p className="text-xs text-gray-400">Repasa las derivadas antes de las 20:00 — tu memoria está en el punto ideal.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 glass-card rounded-2xl px-3 py-2 flex items-center gap-2 shadow-xl"
              >
                <Zap size={14} className="text-yellow-400" />
                <span className="text-xs font-semibold">+40% rendimiento</span>
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-3 py-2 flex items-center gap-2 shadow-xl"
              >
                <span className="text-sm">🎯</span>
                <span className="text-xs font-semibold">Plan adaptado</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
