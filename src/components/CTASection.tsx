import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gradient-gold mb-6">
          準備好提升你的氣場了嗎？
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          立即擁有 Scalar μ Power Resonance 能量磁場機，開啟你的轉運之旅。每一天都充滿正能量！
        </p>
        <a
          href="https://wa.link/ir5nm5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-gradient-gold text-primary-foreground font-bold rounded-lg text-lg shadow-gold hover:shadow-glow transition-all duration-500 hover:scale-105"
        >
          立即 WhatsApp 查詢購買
        </a>
        <p className="text-xs text-muted-foreground mt-6">僅本店銷售 · 正品保證 · 無代理無分店</p>
      </motion.div>
    </section>
  );
};

export default CTASection;
