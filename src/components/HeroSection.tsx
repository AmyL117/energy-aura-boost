import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="能量磁場背景" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-primary tracking-[0.3em] text-sm md:text-base mb-4 font-sans">
            SCALAR μ POWER RESONANCE
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-gold leading-tight">
            能量磁場機
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-2 font-serif">
            運氣因此而改變
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 font-sans">
            第十代 · 因人而異調整磁場 · 適合多種人群使用
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#modes"
            className="px-8 py-4 bg-gradient-gold text-primary-foreground font-bold rounded-lg text-lg shadow-gold hover:shadow-glow transition-shadow duration-500"
          >
            了解五大氣場模式
          </a>
          <a
            href="https://wa.link/ir5nm5"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-gold/30 text-primary rounded-lg text-lg hover:bg-primary/10 transition-colors duration-300"
          >
            立即查詢
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "10", label: "代技術迭代" },
            { value: "5", label: "種需求模式" },
            { value: "6秒", label: "頻率共振週期" },
            { value: "100%", label: "正品保證" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gradient-gold">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
