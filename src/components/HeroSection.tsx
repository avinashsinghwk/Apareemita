import { ArrowRight } from "lucide-react";
import NavBar from "./NavBar";

export function HeroSection(){
    return <header className="relative h-screen">
    <div className="absolute inset-0">
      <img
        src="/kids.jpeg"
        alt="Diverse group of people"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </div>

    <NavBar />

    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
        Embrace Difference<br />To Empower Excellence
      </h2>
      <p className="text-xl text-white mb-8 max-w-3xl">
        Uplifting, empowering, and transforming lives of women, transgender individuals, and sex workers in India, while fostering a healthier environment for future generations.
      </p>
      <button className="cursor-pointer bg-pink-600 text-white px-8 py-3 rounded-full text-lg hover:bg-pink-700 flex items-center gap-2">
        Join Our Cause <ArrowRight size={20} />
      </button>
    </div>
  </header>
}