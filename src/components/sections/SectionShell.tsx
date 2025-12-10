import React, { type ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionShellProps {
  id?: string;
  label: string;
  subtitle?: string;
  children?: ReactNode;
}

export const SectionShell: React.FC<SectionShellProps> = ({
  id,
  label,
  subtitle,
  children,
}) => {
  // Define which sections should align LEFT or RIGHT
  const rightAlignedSections = ["tree-of-life", "eternal-labs"];
  const isRight = id && rightAlignedSections.includes(id);

  return (
    <section
      id={id}
      className="relative flex min-h-screen w-full snap-start items-center justify-center overflow-hidden bg-black px-6 py-16 md:px-16"
    >
      <div
        className={`
          relative z-10 flex max-w-[1440px] flex-col gap-10 md:items-center 
          md:flex-row
          ${isRight ? "md:flex-row-reverse" : "md:flex-row"}
        `}
      >
        {/* TEXT SIDE */}
        <motion.div
          className={`
            space-y-4 w-full 
            ${isRight ? "md:text-right" : "md:text-left"}
          `}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p
            className={`
              tracking-[0.3em] text-xs uppercase text-amber-300/70
              ${isRight ? "ml-auto" : ""}
            `}
          >
            {label}
          </p>

          {subtitle && (
            <p
              className={`
                text-balance text-3xl font-semibold text-amber-50 md:text-5xl
                ${isRight ? "ml-auto" : ""}
              `}
            >
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* VISUAL / CHILDREN */}
        <div
          className={`
            w-full flex 
            ${isRight ? "md:justify-start" : "md:justify-end"}
          `}
        >
          {children}
        </div>
      </div>
    </section>
  );
};
