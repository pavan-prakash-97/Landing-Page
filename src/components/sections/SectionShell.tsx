import React from "react";
import { motion } from "framer-motion";

interface SectionShellProps {
  id?: string;
  label?: string;
  subtitle?: string;
  children: React.ReactNode;
  background?: string;
  backgroundStyle?: React.CSSProperties;
}

export const SectionShell: React.FC<SectionShellProps> = ({
  id,
  label,
  subtitle,
  children,
  background = "bg-black",
  backgroundStyle,
}) => {
  const rightAlignedSections = ["eternal-labs"];
  const isRight = id && rightAlignedSections.includes(id);
  const leftAlignedSections = ["tree-of-life"];
  const isLeft = id && leftAlignedSections.includes(id);

  return (
    <section
      id={id}
      className={`
        relative flex min-h-screen w-full snap-start items-center justify-center 
        overflow-hidden px-6 py-16 md:px-16
        ${background}
      `}
      style={backgroundStyle}
    >
      <div
        className={`
          relative z-10 flex max-w-[1440px] flex-col gap-10 md:items-center 
          md:flex-row
          ${isLeft ? "md:flex-row" : isRight ? "md:flex-row-reverse" : "md:flex-row"}
        `}
      >
        <motion.div
          className={`
            space-y-4 w-full flex flex-col
            ${isLeft ? "md:items-end" : isRight ? "md:items-end" : "md:items-start"}
          `}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p
            className={`
              tracking-[0.3em] text-xs uppercase text-amber-300/70
              ${isLeft ? "text-right" : isRight ? "text-right" : "text-left"}
            `}
          >
            {label}
          </p>

          {subtitle && (
            <p
              className={`
                text-balance text-3xl font-semibold text-amber-50 md:text-5xl
                ${isLeft ? "text-right" : isRight ? "text-right" : "text-left"}
              `}
            >
              {subtitle}
            </p>
          )}
        </motion.div>

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
