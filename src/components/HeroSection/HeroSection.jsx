export default function HeroSection() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#BDD4E7] to-[#AAB9CF] text-center"
    >
      <h1 className="text-5xl font-extrabold text-[#2a2e45]">
        Isto é <span className="text-[#48668d]">um teste</span>
      </h1>
      <p className="mt-4 text-lg text-[#2a2e45]/80">
        Este não é uma primeira versão do meu portfolio nem versão oficial. Isto é apenas pra eu entender como o react funciona!!!
      </p>
    </section>
  );
}
