import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SpecialMeals from "../components/SpecialMeals";
import Updates from "../components/Updates";
import Footer from "../components/Footer";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="bg-[--lily-green]">
      <Navbar />
      <Hero />
      <SpecialMeals />
      <Updates />
      <Footer />
    </div>
  );
}
