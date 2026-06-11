"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Target, AlertTriangle, Map, Layers, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, title: "Analizamos tu nivel", desc: "Evaluación inicial inteligente para entender tu base de conocimiento.", color: "#4A6CF7" },
  { icon: Target, title: "Detectamos fortalezas", desc: "Identificamos en qué áreas ya destacas para potenciarlas.", color: "#8B5CF6" },
  { icon: AlertTriangle, title: "Identificamos debilidades", desc: "Encontramos los gaps de conocimiento que frenan tu progreso.", color: "#F59E0B" },
  { icon: Map, title: "Construimos tu plan", desc: "Generamos un roadmap de aprendizaje 100% personalizado.", color: "#06B6D4" },
  { icon: Layers, title: "Adaptamos el contenido", desc: "El material evoluciona contigo en tiempo real.", color: "#10B981" },
  { icon: TrendingUp, title: "Mejoramos tus resultados", desc: "Seguimiento continuo para garantizar tu progreso.", color: "#4A6CF7" },
];

export default function Solution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="solucion" className="py-24 relative overflow-hidden" ref={ref}>
      {/* bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 mb-4">
            La solución
          </span>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Una IA que entiende{" "}
            <span className="text-gradient">cómo aprendes.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un proceso adaptativo y continuo que transforma cada sesión de estudio en una experiencia personalizada.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue/0 via-brand-blue/40 to-brand-blue/0" />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className={`flex items-center gap-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Card */}
                  <div className="flex-1">
                    <div className="glass-card rounded-2xl p-6 hover:border-brand-blue/30 transition-colors duration-300 max-w-md ml-auto mr-0 md:mx-0">
                      <div className="flex items-start gap-4">
                        <div
                          className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${step.color}20` }}
                        >
                          <step.icon size={20} style={{ color: step.color }} />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-500 mb-1">Paso {i + 1}</div>
                          <h3 className="font-bold text-base mb-1">{step.title}</h3>
                          <p className="text-sm text-gray-400">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex flex-shrink-0 w-5 h-5 rounded-full border-2 border-brand-blue bg-[#060B15] items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: step.color }} />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
