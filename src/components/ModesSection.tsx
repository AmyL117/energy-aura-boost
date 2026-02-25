import { motion } from "framer-motion";

const modes = [
  {
    name: "強者氣場",
    color: "hsl(0 70% 50%)",
    dotClass: "bg-crimson",
    icon: "🔴",
    description: "形成交變磁場",
    detail: "適用於需要談話的場景，提升氣場強度，增強個人威嚴與領導力。紅燈6秒1閃。",
    benefits: ["增強領導氣場", "談判場合必備", "提升自信心", "來者不懼"],
  },
  {
    name: "安神氣場",
    color: "hsl(120 50% 45%)",
    dotClass: "bg-green-500",
    icon: "🟢",
    description: "形成平靜磁場",
    detail: "適用於焦慮焦躁的時候，平復情緒，建立內心平和的能量場。綠燈6秒1閃。",
    benefits: ["緩解焦慮壓力", "改善睡眠質量", "心靈平靜", "情緒穩定"],
  },
  {
    name: "智慧氣場",
    color: "hsl(210 80% 55%)",
    dotClass: "bg-blue-500",
    icon: "🔵",
    description: "形成鎖相磁場",
    detail: "適用於思維混亂的時候，幫助集中注意力，提升思考與決策能力。藍燈6秒1閃。",
    benefits: ["提升專注力", "思維更清晰", "增強記憶力", "決策更果斷"],
  },
  {
    name: "富貴氣場",
    color: "hsl(43 80% 55%)",
    dotClass: "bg-primary",
    icon: "🟡",
    description: "形成遞增磁場",
    detail: "適用於貧乏窮困的處境，提升財運能量場，吸引富貴與機遇。黃燈6秒1閃。",
    benefits: ["提升財運", "吸引貴人", "增加機遇", "富貴顯化"],
  },
  {
    name: "鴻運氣場",
    color: "hsl(0 0% 90%)",
    dotClass: "bg-foreground",
    icon: "⚪",
    description: "形成招財磁場",
    detail: "適用於運氣不佳的處境，形成招財磁場，全面提升整體運勢。白燈6秒1閃。",
    benefits: ["全面轉運", "招財進寶", "好運連連", "時來運轉"],
  },
];

const ModesSection = () => {
  return (
    <section id="modes" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-widest text-sm mb-3">FIVE ENERGY MODES</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gradient-gold mb-4">
            5種需求模式
          </h2>
          <p className="text-lg text-muted-foreground">因人而異調整磁場 · 應對不同人群磁場需求</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modes.map((mode, i) => (
            <motion.div
              key={mode.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-card rounded-xl p-6 border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-gold group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-4 h-4 rounded-full glow-pulse"
                  style={{ backgroundColor: mode.color }}
                />
                <h3 className="text-xl font-bold text-foreground">{mode.name}</h3>
              </div>
              <p className="text-primary font-medium mb-2">{mode.description}</p>
              <p className="text-muted-foreground text-sm mb-4">{mode.detail}</p>
              <div className="grid grid-cols-2 gap-2">
                {mode.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2 text-sm text-foreground/70">
                    <span className="text-primary text-xs">✦</span>
                    {b}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModesSection;
