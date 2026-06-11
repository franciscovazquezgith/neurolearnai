"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function CTAFinal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="cta" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Deep glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060B15] to-[#0A0F1E]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-blue/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-brand-cyan/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src="/logo.png" alt="NeuroLearn AI" width={80} height={80} className="rounded-2xl" />
          </motion.div>

          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 mb-6">
              <Sparkles size={12} />
              Acceso Beta Limitado
            </span>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-5">
              Empieza a aprender de la forma en que tu{" "}
              <span className="text-gradient">cerebro realmente aprende.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Únete a más de 15.000 estudiantes que ya están aprendiendo diferente. Sin tarjeta de crédito.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="flex-1 px-5 py-3.5 rounded-2xl glass-card text-sm outline-none focus:border-brand-blue/50 transition-colors placeholder-gray-600"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-semibold text-sm hover:opacity-90 transition-all glow-blue whitespace-nowrap"
              >
                Unirme a la Beta
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-2xl px-8 py-5 border border-green-500/20 flex items-center gap-3"
            >
              <span className="text-2xl">🎉</span>
              <div className="text-left">
                <div className="font-semibold text-green-400">¡Estás en la lista!</div>
                <div className="text-sm text-gray-400">Te avisaremos en cuanto tengas acceso.</div>
              </div>
            </motion.div>
          )}

          <p className="text-xs text-gray-600">
            Sin spam. Puedes darte de baja en cualquier momento.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
