import { motion } from "framer-motion";

const dataPoints = [
  { icon: "🏆", title: "全球領先", desc: "由專家級工程師聯合各領域人才共同設計" },
  { icon: "👨‍⚕️", title: "專業顧問團隊", desc: "江蘇高級療癒師、成都禪修導師、香港風水師、新加坡武術教練" },
  { icon: "🔬", title: "標量波技術", desc: "Scalar μ Power Resonance 量子共振技術" },
  { icon: "✅", title: "正品聲明", desc: "當前在售 Cihang 8A 為第8代產品，僅本店銷售" },
  { icon: "🚫", title: "防偽提醒", desc: "其它店外觀類似的產品，是第3代的仿製品" },
  { icon: "🙏", title: "承開悟高人祝福", desc: "為大家提供專業產品，能量加持" },
];

const advisors = [
  { role: "江蘇高級療癒師", name: "周老師", specialty: "能量療癒" },
  { role: "成都禪修導師", name: "徐老師", specialty: "禪修指導" },
  { role: "香港風水師", name: "黃老師", specialty: "風水命理" },
  { role: "新加坡武術教練", name: "劉老師", specialty: "武術氣功" },
];

const DataSection = () => {
  return (
    <section className="py-20 md:py-32 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-widest text-sm mb-3">WHY CHOOSE US</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gradient-gold mb-4">
            為何選擇我們
          </h2>
          <p className="text-lg text-muted-foreground">正品保證 · 專家團隊 · 全球領先技術</p>
        </motion.div>

        {/* Data grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {dataPoints.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-gradient-card rounded-xl p-6 border border-gold/10 hover:border-gold/25 transition-all duration-300"
            >
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Advisory team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gradient-gold mb-4">
            專業顧問團隊
          </h3>
          <p className="text-muted-foreground">跨領域專家聯合打造</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisors.map((advisor, i) => (
            <motion.div
              key={advisor.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-card rounded-xl p-6 border border-gold/10 text-center hover:shadow-gold transition-shadow duration-500"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">{advisor.name.charAt(0)}</span>
              </div>
              <h4 className="text-foreground font-bold">{advisor.name}</h4>
              <p className="text-primary text-sm mt-1">{advisor.role}</p>
              <p className="text-muted-foreground text-xs mt-2">{advisor.specialty}</p>
            </motion.div>
          ))}
        </div>

        {/* Operation info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gradient-gold mb-8 text-center">
            操作說明
          </h3>
          <div className="bg-gradient-card rounded-xl border border-gold/10 overflow-hidden">
            <div className="grid grid-cols-3 gap-px bg-border">
              <div className="bg-card p-4 text-center font-bold text-primary">功能</div>
              <div className="bg-card p-4 text-center font-bold text-primary">操作</div>
              <div className="bg-card p-4 text-center font-bold text-primary">指示燈</div>
            </div>
            {[
              { fn: "開機", op: "長按電源鍵3秒", light: "燈→快閃→滅" },
              { fn: "關機", op: "長按電源鍵3秒", light: "快閃→亮→滅" },
              { fn: "切換模式", op: "工作狀態下，短按電源鍵切換5種模式", light: "對應顏色燈亮起並切換" },
              { fn: "查看電量", op: "短按電源鍵查看", light: "根據電量顯示" },
              { fn: "自然休眠", op: "小米自然休眠", light: "熄滅" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 gap-px bg-border">
                <div className="bg-card p-4 text-sm text-foreground/80">{row.fn}</div>
                <div className="bg-card p-4 text-sm text-foreground/80">{row.op}</div>
                <div className="bg-card p-4 text-sm text-muted-foreground">{row.light}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataSection;
