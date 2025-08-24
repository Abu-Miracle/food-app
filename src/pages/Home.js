import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SpecialMeals from "../components/SpecialMeals";

export default function Home() {
  return (
    <div className="bg-[--lily-green]">
      <Navbar />
      <Hero />
      <SpecialMeals />
    </div>
  );
}
