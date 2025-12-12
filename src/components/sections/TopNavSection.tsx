import { motion } from "framer-motion";

export const TopNav: React.FC = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-black/20 border-b border-white/10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-2">
          <div className="bg-white p-2 rounded-xl">
            <img
              src="https://cdn.prod.website-files.com/6923fe93592efd9ac40a058a/6923fec8a6024322ea047c25_eternal-logo.png"
              className="h-10 w-auto"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#desert-crown" className="text-gray-200 hover:text-amber-300 transition">
            Chapter I
          </a>
          <a href="#about" className="text-gray-200 hover:text-amber-300 transition">
            About
          </a>
          <a href="#contact" className="text-gray-200 hover:text-amber-300 transition">
            Contact
          </a>
        </div>

        <div className="md:hidden text-gray-200">☰</div>
      </div>
    </motion.nav>
  );
};
