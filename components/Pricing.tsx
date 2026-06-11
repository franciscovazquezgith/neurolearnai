"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Gratuito",
    price: "0",
    period: "para siempre",
    desc: "Empieza a descubrir el poder de NeuroLearn.",
    features: [
      "Tutor IA básico (20 preguntas/día)",
      "50 flashcards automáticas",
      "1 plan de estudio activo",
      "Estadísticas básicas",
      "Acceso web",
    ],
    cta: "Empezar gratis",
    highlight: false,
  },
  {
    name: "Premium",
    price: "9.99",
    period: "por mes",
    desc: "El sistema completo para aprender sin límites.",
    features: [
      "Tutor IA ilimitado 24/7",
      "Flashcards ilimitadas",
      "Planes personalizados infinitos",
      "Estadísticas avanzadas",
      "Exámenes inteligentes",
      "Repetición espaciada optimizada",
      "Resúmenes automáticos",
      "Soporte prioritario",
    ],
    cta: "Unirme a la Beta — 9.99 USD/mes",
    highlight: true,
    badge: "Más popular",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="precios" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#060B15] to-[#080D18]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-blue/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-brand-green bg-brand-green/10 border border-brand-green/20 mb-4">
            Precios
          </span>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Simple. Transparente.{" "}
            <span className="text-gradient">Sin sorpresas.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Empieza gratis. Escala cuando estés listo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-start max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-3xl p-8 flex flex-col gap-6 ${
                plan.highlight
                  ? "bg-gradient-to-b from-brand-blue/20 to-brand-cyan/10 border-2 border-brand-blue/40 glow-blue"
                  : "glass-card"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-xs font-bold text-white shadow-lg">
                    <Zap size={11} />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                <p className="text-xs text-gray-500">{plan.desc}</p>
              </div>

              <div className="flex items-end gap-1">
                <span className="text-5xl font-black">
                  {plan.price === "0" ? "Gratis" : `$${plan.price}`}
                </span>
                {plan.price !== "0" && (
                  <span className="text-sm text-gray-400 mb-2">{plan.period}</span>
                )}
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <div className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-brand-green" />
                    </div>
                    <span className="text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`block w-full text-center py-3.5 rounded-2xl font-semibold text-sm transition-all ${
                  plan.highlight
                    ? "bg-gradient-to-r from-brand-blue to-brand-cyan text-white hover:opacity-90 glow-blue"
                    : "border border-white/10 text-white hover:bg-white/5"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-gray-500 mt-8"
        >
          Sin tarjeta de crédito · Cancela cuando quieras · Precio de lanzamiento
        </motion.p>
      </div>
    </section>
  );
}
