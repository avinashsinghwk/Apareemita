import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full relative z-50 flex justify-between items-center px-6 lg:px-20 py-4 bg-black/20 backdrop-blur-md">
      <a className="cursor-pointer" href="/">
        <div className="flex items-center gap-2">
          <img src="/logo.jpeg" alt="Apareemita Logo" className="h-12 w-auto rounded-full" />
          <h1 className="text-white text-2xl font-bold">Apareemita</h1>
        </div>
      </a>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex md:items-center space-x-6">
        <a href="#story" className="text-white hover:text-pink-400">Our Story</a>
        <a href="#programs" className="text-white hover:text-pink-400">Programs</a>
        <a href="#impact" className="text-white hover:text-pink-400">Impact</a>
        <a href="#team" className="text-white hover:text-pink-400">Team</a>
        <button className="cursor-pointer bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700">
          Donate
        </button>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white focus:outline-none z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-6 bg-black/80 p-6 rounded-lg flex flex-col space-y-4 w-48 shadow-lg md:hidden z-50">
          <a href="#story" className="text-white hover:text-pink-400" onClick={() => setIsOpen(false)}>Our Story</a>
          <a href="#programs" className="text-white hover:text-pink-400" onClick={() => setIsOpen(false)}>Programs</a>
          <a href="#impact" className="text-white hover:text-pink-400" onClick={() => setIsOpen(false)}>Impact</a>
          <a href="#team" className="text-white hover:text-pink-400" onClick={() => setIsOpen(false)}>Team</a>
          <button 
            className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700"
            onClick={() => setIsOpen(false)}
          >
            Donate
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;