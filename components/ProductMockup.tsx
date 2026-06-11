"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { BookOpen, Zap, Brain, CheckCircle } from "lucide-react";

export default function ProductMockup() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#080D18] to-[#060B15]" />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">
            No estudies más.{" "}
            <span className="text-gradient">Estudia mejor.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Una interfaz diseñada para que el aprendizaje sea una experiencia placentera y eficiente.
          </p>
        </motion.div>

        {/* Mockup showcase */}
        <div className="relative flex justify-center">
          {/* Perspective container */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: 15 }}
            animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ perspective: "1000px" }}
            className="w-full max-w-4xl"
          >
            {/* Main mockup card */}
            <div className="glass-card rounded-3xl overflow-hidden border border-brand-blue/20 glow-blue">
              {/* Browser chrome */}
              <div className="bg-[#0F172A] px-4 py-3 flex items-center gap-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white/5 rounded-lg px-4 py-1 text-xs text-gray-500 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    app.neurolearn.ai/dashboard
                  </div>
                </div>
              </div>

              {/* App UI */}
              <div className="bg-gradient-to-br from-[#0A0F1E] to-[#060B15] p-6">
                {/* Top nav */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Image src="/logo.png" alt="logo" width={28} height={28} className="rounded-lg" />
                    <span className="text-sm font-semibold">NeuroLearn AI</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-xs text-gray-500">Semana 4</div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center text-xs font-bold">J</div>
                  </div>
                </div>

                {/* Dashboard grid */}
                <div className="grid md:grid-cols-3 gap-4">
                  {/* Left — study plan */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold">Plan de hoy</span>
                        <span className="text-xs text-brand-cyan">3/5 completados</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { name: "Derivadas — Ejercicios", done: true, time: "15 min" },
                          { name: "Límites — Repaso", done: true, time: "10 min" },
                          { name: "Flashcards: Cálculo", done: true, time: "8 min" },
                          { name: "Examen práctica", done: false, time: "20 min", active: true },
                          { name: "Resumen semanal", done: false, time: "5 min" },
                        ].map((item) => (
                          <div
                            key={item.name}
                            className={`flex items-center gap-3 p-2.5 rounded-xl transition-colors ${
                              item.active ? "bg-brand-blue/15 border border-brand-blue/20" : "bg-white/3"
                            }`}
                          >
                            <CheckCircle
                              size={14}
                              className={item.done ? "text-green-400" : item.active ? "text-brand-blue" : "text-gray-600"}
                            />
                            <span className={`text-xs flex-1 ${item.done ? "text-gray-500 line-through" : "text-white"}`}>
                              {item.name}
                            </span>
                            <span className="text-xs text-gray-600">{item.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right — stats */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-brand-blue/15 to-brand-cyan/10 rounded-2xl p-4 border border-brand-blue/20">
                      <div className="flex items-center gap-2 mb-3">
                        <Zap size={14} className="text-yellow-400" />
                        <span className="text-xs font-semibold">Racha activa</span>
                      </div>
                      <div className="text-4xl font-black text-gradient">12</div>
                      <div className="text-xs text-gray-400">días consecutivos</div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                      <div className="flex items-center gap-2 mb-3">
                        <Brain size={14} className="text-brand-cyan" />
                        <span className="text-xs font-semibold">Nivel IA</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { label: "Cálculo", pct: 78 },
                          { label: "Álgebra", pct: 62 },
                          { label: "Física", pct: 45 },
                        ].map((s) => (
                          <div key={s.label}>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-gray-400">{s.label}</span>
                              <span className="text-gray-500">{s.pct}%</span>
                            </div>
                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan"
                                style={{ width: `${s.pct}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen size={14} className="text-brand-green" />
                        <span className="text-xs font-semibold">Flashcards</span>
                      </div>
                      <div className="text-2xl font-black">247</div>
                      <div className="text-xs text-gray-400">generadas por IA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 top-1/4 glass-card rounded-2xl p-3 hidden lg:flex items-center gap-2 shadow-2xl"
          >
            <span className="text-lg">🧠</span>
            <div>
              <div className="text-xs font-semibold">IA activa</div>
              <div className="text-[10px] text-gray-400">Analizando tu progreso</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -left-4 bottom-1/4 glass-card rounded-2xl p-3 hidden lg:flex items-center gap-2 shadow-2xl"
          >
            <span className="text-lg">📈</span>
            <div>
              <div className="text-xs font-semibold">+40% retención</div>
              <div className="text-[10px] text-gray-400">esta semana</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
