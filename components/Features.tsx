"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Sparkles, Brain, FileText, Clock, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Tutor IA 24/7",
    desc: "Resuelve dudas como un profesor personal. Disponible en cualquier momento, con respuestas precisas y contextuales.",
    color: "#4A6CF7",
    glow: "rgba(74,108,247,0.3)",
  },
  {
    icon: Sparkles,
    title: "Aprendizaje Adaptativo",
    desc: "El contenido cambia según tu progreso. Cada lección se ajusta a lo que ya sabes y lo que necesitas aprender.",
    color: "#8B5CF6",
    glow: "rgba(139,92,246,0.3)",
  },
  {
    icon: Brain,
    title: "Flashcards Inteligentes",
    desc: "Generadas automáticamente a partir de tu material de estudio, optimizadas para maximizar la retención.",
    color: "#06B6D4",
    glow: "rgba(6,182,212,0.3)",
  },
  {
    icon: FileText,
    title: "Exámenes Personalizados",
    desc: "Basados en tus errores. La IA identifica tus puntos débiles y crea exámenes que te hacen mejorar donde más lo necesitas.",
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.3)",
  },
  {
    icon: Clock,
    title: "Repetición Espaciada",
    desc: "Repasa justo antes de olvidar. El algoritmo calcula el momento exacto en que tu memoria necesita refuerzo.",
    color: "#10B981",
    glow: "rgba(16,185,129,0.3)",
  },
  {
    icon: BarChart3,
    title: "Estadísticas Avanzadas",
    desc: "Visualiza tu evolución con dashboards detallados. Tiempo de estudio, áreas de mejora, velocidad de aprendizaje y más.",
    color: "#EC4899",
    glow: "rgba(236,72,153,0.3)",
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#060B15] to-[#080D18]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-brand-purple bg-brand-purple/10 border border-brand-purple/20 mb-4">
            Features
          </span>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Todo lo que necesitas para{" "}
            <span className="text-gradient">dominar cualquier tema.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Herramientas diseñadas con IA para que estudies menos tiempo y aprendas más.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative glass-card rounded-2xl p-7 cursor-default overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at top left, ${f.glow} 0%, transparent 70%)` }}
              />

              {/* Icon */}
              <div
                className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${f.color}15`, boxShadow: `0 0 0 1px ${f.color}30` }}
              >
                <f.icon size={22} style={{ color: f.color }} />
              </div>

              <h3 className="relative text-lg font-bold mb-2">{f.title}</h3>
              <p className="relative text-sm text-gray-400 leading-relaxed">{f.desc}</p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${f.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
