import React from "react";

interface SectionShellProps {
  id?: string;
  children: React.ReactNode;
  background?: string;
  backgroundStyle?: React.CSSProperties;
}

export const SectionShell: React.FC<SectionShellProps> = ({
  id,
  children,
  background = "bg-black",
  backgroundStyle,
}) => {
  return (
    <section
      id={id}
      className={`
        relative flex w-full min-h-screen snap-start items-center justify-center
        overflow-hidden px-6 py-16 md:px-16
        ${background}
      `}
      style={backgroundStyle}
    >
      <div className="relative z-10 w-full max-w-[1440px]">{children}</div>
    </section>
  );
};
