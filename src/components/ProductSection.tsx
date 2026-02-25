import { motion } from "framer-motion";
import productImg from "@/assets/product-dark.jpg";
import auraImg from "@/assets/aura-energy.jpg";

const ProductSection = () => {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Product showcase */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-gold">
              <img src={productImg} alt="Scalar μ Power Resonance 能量磁場機" className="w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-primary/5 blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary tracking-widest text-sm mb-3">CIHANG 8A · 第十代</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-6">
              全球領先科技
            </h2>
            <div className="space-y-4 text-foreground/80">
              <p>由專家級工程師聯合各領域人才共同設計，融合量子標量波技術與傳統磁場理論。</p>
              <p>人體神經電流活動會向外輻射磁場，氣場是我們對人體磁場的直接感受。你的磁場能量反映了你的思維能力，磁場能量同頻共振實現了人以群分。</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "標量波技術", desc: "μ Power 共振" },
                { label: "5種模式", desc: "因人而異調整" },
                { label: "6秒頻率", desc: "精準共振週期" },
                { label: "正品保證", desc: "僅本店銷售" },
              ].map((item) => (
                <div key={item.label} className="bg-gradient-card rounded-lg p-4 border border-gold/10">
                  <p className="text-primary font-bold text-sm">{item.label}</p>
                  <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Aura science */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-gold">
              <img src={auraImg} alt="人體能量氣場" className="w-full" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:order-1"
          >
            <p className="text-primary tracking-widest text-sm mb-3">ENERGY FIELD SCIENCE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-6">
              氣場提升原理
            </h2>
            <div className="space-y-4 text-foreground/80">
              <div className="flex gap-3">
                <span className="text-primary mt-1">01</span>
                <p>人體神經電流活動會向外輻射磁場，形成獨特的個人氣場</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary mt-1">02</span>
                <p>氣場是我們對人體磁場的直接感受，影響人際關係與運勢</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary mt-1">03</span>
                <p>你的磁場能量反映了你的思維能力與精神狀態</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary mt-1">04</span>
                <p>磁場能量同頻共振，實現人以群分，吸引同頻的貴人</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
