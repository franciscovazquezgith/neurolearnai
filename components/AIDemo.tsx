"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Brain, Send, Sparkles } from "lucide-react";
import Image from "next/image";

const conversation = [
  { role: "user", text: "No entiendo las derivadas.", delay: 0 },
  { role: "ai", text: "¡Perfecto! Voy a explicártelo con un ejemplo visual que se adapta a tu forma de aprender.", delay: 800 },
  { role: "ai", text: "Imagina una pelota rodando por una colina. La derivada mide qué tan rápido cambia su altura en cada punto exacto.", delay: 1600 },
  { role: "user", text: "¿Y cómo se calcula?", delay: 2800 },
  { role: "ai", text: "Para f(x) = x², la derivada es f'(x) = 2x. Eso significa: en x=3, la pendiente es 6. ¿Quieres que generemos ejercicios prácticos?", delay: 3600 },
  { role: "user", text: "Sí, quiero practicar.", delay: 5000 },
  { role: "ai", text: "Generando 5 ejercicios personalizados basados en tu nivel... ✨ Listo. Empecemos con el más sencillo.", delay: 5800 },
];

export default function AIDemo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    conversation.forEach((msg, i) => {
      setTimeout(() => setVisibleCount(i + 1), msg.delay + 300);
    });
  }, [inView]);

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#060B15] via-[#080D18] to-[#060B15]" />
      {/* Futuristic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-purple/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-brand-purple bg-brand-purple/10 border border-brand-purple/20 mb-5">
              Tutor IA 24/7
            </span>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-5">
              Tu profesor personal,{" "}
              <span className="text-gradient">siempre disponible.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              No más esperar a tutorías. No más dudas sin resolver. La IA de NeuroLearn entiende tu nivel y explica exactamente como tú necesitas.
            </p>
            <ul className="space-y-3">
              {[
                "Respuestas en segundos, no días",
                "Explicaciones adaptadas a tu nivel",
                "Genera ejercicios al instante",
                "Detecta cuando te confundes y recalibra",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] text-white font-bold">✓</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right chat */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass-card rounded-3xl overflow-hidden border border-brand-purple/20">
              {/* Chat header */}
              <div className="px-5 py-4 border-b border-white/5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center">
                  <Brain size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold">NeuroLearn AI</div>
                  <div className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    Online
                  </div>
                </div>
                <div className="ml-auto">
                  <Sparkles size={14} className="text-brand-purple" />
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-4 min-h-[340px]">
                {conversation.slice(0, visibleCount).map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} gap-2`}
                  >
                    {msg.role === "ai" && (
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex-shrink-0 flex items-center justify-center mt-0.5">
                        <Brain size={12} className="text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-gradient-to-r from-brand-blue to-brand-cyan text-white rounded-tr-sm"
                          : "bg-white/5 text-gray-200 rounded-tl-sm border border-white/5"
                      }`}
                    >
                      {msg.text}
                    </div>
                    {msg.role === "user" && (
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan flex-shrink-0 flex items-center justify-center mt-0.5">
                        <span className="text-xs font-bold">J</span>
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Typing indicator */}
                {visibleCount < conversation.length && visibleCount > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center">
                      <Brain size={12} className="text-white" />
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-sm px-4 py-2.5 flex gap-1">
                      {[0, 1, 2].map((d) => (
                        <motion.div
                          key={d}
                          className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: d * 0.15 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input */}
              <div className="px-5 pb-5">
                <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-4 py-3 border border-white/8">
                  <input
                    type="text"
                    placeholder="Escribe tu duda..."
                    className="flex-1 bg-transparent text-sm text-gray-300 placeholder-gray-600 outline-none"
                  />
                  <button className="w-8 h-8 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan flex items-center justify-center hover:opacity-80 transition-opacity">
                    <Send size={13} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
