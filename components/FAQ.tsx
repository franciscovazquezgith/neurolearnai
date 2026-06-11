"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Cómo funciona el aprendizaje adaptativo?",
    a: "NeuroLearn AI analiza continuamente tu interacción: los errores que cometes, el tiempo que tardas en responder, los temas que revisas más veces. Con esa información, nuestro modelo ajusta el orden, dificultad y formato del contenido en tiempo real.",
  },
  {
    q: "¿Necesito instalar algo?",
    a: "No. NeuroLearn AI funciona 100% en el navegador. También tenemos apps nativas para iOS y Android en desarrollo para la versión 2.0.",
  },
  {
    q: "¿Qué materias cubre?",
    a: "Actualmente cubre matemáticas, ciencias, idiomas, programación, historia y preparación de oposiciones. Estamos añadiendo nuevas materias cada mes durante la beta.",
  },
  {
    q: "¿El plan gratuito es realmente gratuito?",
    a: "Sí, el plan gratuito no tiene límite de tiempo. Puedes usar el tutor IA básico y tus primeras 50 flashcards sin introducir ninguna tarjeta.",
  },
  {
    q: "¿Puedo cancelar el Premium en cualquier momento?",
    a: "Sí. Sin penalizaciones ni permanencia. Puedes cancelar desde tu perfil con un solo clic y mantendrás el acceso Premium hasta el final del período pagado.",
  },
  {
    q: "¿Es seguro para menores de edad?",
    a: "Absolutamente. NeuroLearn AI no recoge datos sensibles y cumple con COPPA y GDPR. Para menores de 13 años recomendamos la supervisión de un adulto durante el registro.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#080D18] to-[#060B15]" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 mb-4">
            FAQ
          </span>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Preguntas{" "}
            <span className="text-gradient">frecuentes.</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-white/3 transition-colors"
              >
                <span className="font-semibold text-sm">{faq.q}</span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0 text-gray-400"
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
