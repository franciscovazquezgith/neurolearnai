"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sofía Martínez",
    role: "Estudiante de Medicina, UAM",
    avatar: "SM",
    gradient: "from-brand-blue to-brand-purple",
    stars: 5,
    text: "Estudié Anatomía durante meses sin avanzar. Con NeuroLearn AI en dos semanas aprendí más que en todo el semestre. El tutor IA es increíble — explica exactamente como mi cerebro necesita.",
    tag: "Estudiante universitaria",
  },
  {
    name: "Carlos Ruiz",
    role: "Desarrollador & Autodidacta",
    avatar: "CR",
    gradient: "from-brand-cyan to-brand-green",
    stars: 5,
    text: "Quería aprender Machine Learning pero todos los recursos eran demasiado genéricos. NeuroLearn AI adaptó todo el plan a lo que ya sabía. Pasé de 0 a publicar mi primer modelo en 6 semanas.",
    tag: "Profesional",
  },
  {
    name: "Ana López",
    role: "Opositora · Cuerpo Superior",
    avatar: "AL",
    gradient: "from-brand-purple to-pink-500",
    stars: 5,
    text: "Las oposiciones son una maratón. La repetición espaciada de NeuroLearn me permitió retener miles de conceptos sin ahogarme. Aprobé a la primera. No puedo recomendarlo más.",
    tag: "Opositora",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#080D18] to-[#060B15]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 mb-4">
            Testimonios
          </span>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Lo que dicen nuestros{" "}
            <span className="text-gradient">estudiantes.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Más de 15.000 personas ya aprenden diferente. Esto es lo que cuentan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-7 flex flex-col gap-5 cursor-default"
            >
              {/* Quote icon */}
              <Quote size={24} className="text-brand-blue/40" />

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1">"{t.text}"</p>

              {/* Tag */}
              <span className={`self-start text-xs px-3 py-1 rounded-full bg-gradient-to-r ${t.gradient} bg-opacity-20 text-white font-medium`}
                style={{ background: undefined }}
              >
                <span className={`inline-block bg-gradient-to-r ${t.gradient} bg-clip-text text-transparent font-semibold`}>
                  {t.tag}
                </span>
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
