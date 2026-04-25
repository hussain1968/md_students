/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export function FeatureCard({ title, description, icon: Icon, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-8 rounded-2xl bg-white border border-stone-200 hover:border-stone-400 transition-all group cursor-default"
    >
      <div className="w-12 h-12 rounded-xl bg-stone-900 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold text-stone-900 mb-3 font-serif italic">{title}</h3>
      <p className="text-stone-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}

export function SectionHeader({ title, subtitle, centered = false }: { title: string; subtitle: string; centered?: boolean }) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-xs uppercase tracking-widest text-stone-500 font-medium mb-4 block"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-serif text-stone-900"
      >
        {title}
      </motion.h2>
    </div>
  );
}
