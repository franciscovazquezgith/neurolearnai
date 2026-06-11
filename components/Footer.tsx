"use client";
import Image from "next/image";
import { Twitter, Github, Linkedin, Instagram, Mail } from "lucide-react";

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:hola@neurolearn.ai", label: "Email" },
];

const links = {
  Producto: ["Features", "Precios", "Changelog", "Roadmap"],
  Empresa: ["Sobre nosotros", "Blog", "Prensa", "Inversores"],
  Legal: ["Privacidad", "Términos", "Cookies", "Seguridad"],
};

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 border-t border-white/5 bg-[#060B15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="NeuroLearn AI" width={36} height={36} className="rounded-xl" />
              <span className="font-bold text-base">
                Neuro<span className="text-gradient">Learn</span>
                <span className="text-xs font-semibold ml-1 text-brand-cyan">AI</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-xs">
              Aprende diferente. Aprende mejor. La plataforma de aprendizaje que evoluciona contigo.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-gray-500 hover:text-white hover:border-brand-blue/30 transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © 2024 NeuroLearn AI. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            Hecho con <span className="text-red-400">♥</span> para estudiantes del mundo
          </p>
        </div>
      </div>
    </footer>
  );
}
