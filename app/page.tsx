import Hero from "@/components/Hero";
import About from "@/components/About";
import Ecosystem from "@/components/Ecosystem";
import Questionnaire from "@/components/Questionnaire";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />

      <About />

      <Ecosystem />

      <Questionnaire />

      <Footer />
    </main>
  );
}