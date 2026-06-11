"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Users, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    stat: "80%",
    title: "Olvidan lo aprendido",
    desc: "Ocho de cada diez estudiantes olvidan la mayor parte del contenido en menos de una semana sin refuerzo.",
    color: "from-red-500/20 to-orange-500/10",
    border: "border-red-500/20",
    iconColor: "text-red-400",
  },
  {
    icon: Users,
    stat: "1:30",
    title: "Educación masificada",
    desc: "Un solo método para treinta personas distintas. Cada persona aprende de una forma única y a un ritmo diferente.",
    color: "from-orange-500/20 to-yellow-500/10",
    border: "border-orange-500/20",
    iconColor: "text-orange-400",
  },
  {
    icon: AlertCircle,
    stat: "0%",
    title: "Sin adaptación real",
    desc: "La educación tradicional no detecta tus puntos débiles ni ajusta el contenido a tu evolución.",
    color: "from-yellow-500/20 to-amber-500/10",
    border: "border-yellow-500/20",
    iconColor: "text-yellow-400",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problema" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#060B15] via-[#080D18] to-[#060B15]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-red-400 bg-red-500/10 border border-red-500/20 mb-4">
            El problema
          </span>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">
            El sistema educativo fue diseñado para{" "}
            <span className="text-red-400">enseñar igual a todos.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            La educación tradicional ignora que cada mente funciona de forma distinta.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.stat}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-2xl p-7 bg-gradient-to-br ${p.color} border ${p.border} hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className={`inline-flex p-3 rounded-xl bg-white/5 mb-4`}>
                <p.icon size={22} className={p.iconColor} />
              </div>
              <div className={`text-5xl font-black mb-2 ${p.iconColor}`}>{p.stat}</div>
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
