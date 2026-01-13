const CssParticles = () => {
  const particles = Array.from({ length: 50 }); // Create 50 particles

  return (
    <div className="particle-container">
      {particles.map((_, i) => (
        <div key={i} className="particle" />
      ))}
    </div>
  );
};

export default CssParticles;
