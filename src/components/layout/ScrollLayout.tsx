import type { ReactNode } from "react";

interface ScrollLayoutProps {
  children: ReactNode;
}

export default function ScrollLayout({ children }: ScrollLayoutProps) {
  return (
    <div className="h-screen w-full snap-y snap-mandatory overflow-y-scroll overflow-x-hidden no-scrollbar bg-black scroll-smooth">
      {children}
    </div>
  );
}
