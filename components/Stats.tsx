"use client";
import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 50000, suffix: "+", label: "Horas estudiadas", icon: "⏱️" },
  { value: 92, suffix: "%", label: "Satisfacción", icon: "😊" },
  { value: 4.9, suffix: "/5", label: "Valoración media", icon: "⭐" },
  { value: 15000, suffix: "+", label: "Usuarios beta", icon: "🚀" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v * 10) / 10),
    });
    return controls.stop;
  }, [inView, target]);

  const fmt = (n: number) =>
    n >= 1000 ? `${(n / 1000).toFixed(0)}K` : n % 1 !== 0 ? n.toFixed(1) : `${n}`;

  return (
    <span ref={ref} className="text-5xl lg:text-6xl font-black text-gradient">
      {fmt(display)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 via-transparent to-brand-cyan/5" />
      <div className="absolute inset-0 border-y border-brand-blue/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="text-3xl mb-1">{s.icon}</div>
              <Counter target={s.value} suffix={s.suffix} />
              <p className="text-sm text-gray-400 font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
