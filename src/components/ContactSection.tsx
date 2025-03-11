import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection(){
    return <section id="contact" className="bg-gray-50 py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="text-center">
          <Phone className="mx-auto mb-4 text-pink-600" size={24} />
          <p className="text-gray-600">+91 8285255481</p>
          <p className="text-gray-600">+91 8709837599</p>
        </div>
        <div className="text-center">
          <Mail className="mx-auto mb-4 text-pink-600" size={24} />
          <p className="text-gray-600">apareemitahumanitarians@gmail.com</p>
        </div>
        <div className="text-center">
          <MapPin className="mx-auto mb-4 text-pink-600" size={24} />
          <p className="text-gray-600">New Delhi, India</p>
        </div>
      </div>
    </div>
  </section>
}