import { motion } from "framer-motion";
import productModesImg from "@/assets/product-modes.jpg";

const BenefitsSection = () => {
  const benefits = [
    { title: "氣場強", desc: "增強個人磁場能量", stat: "300%", statLabel: "氣場提升" },
    { title: "貴人相助", desc: "吸引同頻能量的貴人", stat: "85%", statLabel: "用戶反饋見效" },
    { title: "好運顯化", desc: "改善整體運勢走向", stat: "92%", statLabel: "滿意度" },
    { title: "來者不懼", desc: "增強自信與決策力", stat: "10代", statLabel: "技術積累" },
  ];

  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary tracking-widest text-sm mb-3">TRANSFORM YOUR ENERGY</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-6">
              強者磁場的力量
            </h2>
            <p className="text-foreground/80 mb-8">
              早上打開，提升到強者氣場！強者氣場，強大吸引力！氣場強、貴人相助、好運顯化、來者不懼。
            </p>

            <div className="grid grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gradient-card rounded-lg p-4 border border-gold/10"
                >
                  <p className="text-2xl font-bold text-gradient-gold">{b.stat}</p>
                  <p className="text-xs text-muted-foreground">{b.statLabel}</p>
                  <p className="text-sm font-bold text-foreground mt-2">{b.title}</p>
                  <p className="text-xs text-muted-foreground">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-gold animate-float">
              <img src={productModesImg} alt="五種需求模式" className="w-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
