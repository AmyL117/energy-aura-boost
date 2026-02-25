const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-gold/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gradient-gold font-serif text-lg mb-2">Scalar μ Power Resonance</p>
        <p className="text-muted-foreground text-sm mb-4">能量磁場機 · 運氣因此而改變</p>
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} All Right Just Do. 正品保證，僅本店銷售。
        </p>
      </div>
    </footer>
  );
};

export default Footer;
