import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer(){
    return <footer className="bg-gray-900 text-white py-12 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-4">Apareemita Humanitarians</h3>
          <p className="text-gray-400">Empowering lives through compassion and action since 2018.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#story" className="hover:text-pink-300">Our Story</a></li>
            <li><a href="#programs" className="hover:text-pink-300">Programs</a></li>
            <li><a href="#impact" className="hover:text-pink-300">Impact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Support Us</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-pink-300">Donate</a></li>
            <li><a href="#" className="hover:text-pink-300">Volunteer</a></li>
            <li><a href="#" className="hover:text-pink-300">Partner With Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-pink-300"><Facebook size={24} /></a>
            <a href="https://x.com" className="hover:text-pink-300"><Twitter size={24} /></a>
            <a href="https://www.linkedin.com/company/apareemita-humanitarians-association/" className="hover:text-pink-300"><Linkedin size={24} /></a>
            <a href="https://www.instagram.com/apareemita_ha21/?igsh=MXJpN3ZzeTMzY2IzeA%3D%3D" className="hover:text-pink-300"><Instagram size={24} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Apareemita Humanitarians Association. All rights reserved.</p>
      </div>
    </div>
  </footer>
}