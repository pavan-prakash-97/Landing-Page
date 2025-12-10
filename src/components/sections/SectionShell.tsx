import React, { type ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionShellProps {
  id?: string;
  label: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export const SectionShell: React.FC<SectionShellProps> = ({
  id,
  label,
  title,
  subtitle,
  children,
}) => {
  return (
    <section
      id={id}
      className="relative flex min-h-screen w-full snap-start items-center justify-center overflow-hidden bg-black px-6 py-16 md:px-16"
    >
      {/* Subtle vignette / marble overlay */}
      {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,215,128,0.08),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(0,0,0,0.9),_black)]" /> */}

      <div className="relative z-10 border flex max-w-[1440px] flex-col gap-10 md:flex-row md:items-center">
        {/* Left: copy */}
        <motion.div
          className="w-full space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="tracking-[0.3em] text-xs uppercase text-amber-300/70">
            {label}
          </p>
          <h2 className="text-balance text-3xl font-semibold text-amber-50 md:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="max-w-xl text-sm text-neutral-300/80 md:text-base">
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>

        {/* Right: visual placeholder (each section customizes this) */}
        {/* <div className="md:w-1/2 border" /> */}
      </div>
    </section>
  );
};
