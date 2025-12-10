import { motion } from "framer-motion";
import CrowningMomentImage from "../../assets/landing-page/1.jpeg";

export default function CrowningMoment() {
  return (
    <section className="h-screen snap-start bg-black flex flex-col items-center justify-center px-6 text-gold text-center">
      <motion.img
        src={CrowningMomentImage}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="w-64"
      />

      <motion.p
        className="text-2xl max-w-2xl mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        “This is not skincare.  
        This is the return of the world’s most sacred oil — perfected for the modern age.”
      </motion.p>
    </section>
  );
}
