import { Instagram, Linkedin, Github } from "lucide-react";


export function TeamSection() {
  return (
    <section id="team" className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Swati Sharma */}
          <div className="text-center">
            <img
              src="/swati.jpg"
              alt="Ms. Swati Sharma"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Ms. Swati Sharma</h3>
            <p className="text-gray-600">Founder and President</p>
            <div className="flex justify-center space-x-4 mt-3">
              <a href="https://www.linkedin.com/in/swati-sharma-772b74137/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-pink-400 hover:text-pink-500" />
              </a>
              <a href="https://www.instagram.com/swatisharma0901/" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-pink-600 hover:text-pink-700" />
              </a>
            </div>
          </div>

          {/* Avinash Singh */}
          <div className="text-center">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQFSSuA4yLMuog/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1689560159146?e=2147483647&v=beta&t=uNyK_eCNEQDmTMSDeOVfeHA-VQsp1nnVEpv3FXSSMCw"
              alt="Program Director"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-b-4 border-stone-500"
            />
            <h3 className="text-xl font-semibold">Mr. Avinash Singh</h3>
            <p className="text-gray-600">Tech Head</p>
            <div className="flex justify-center space-x-4 mt-3">
              <a href="https://www.linkedin.com/in/avinash-singh-a27769239/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-pink-400 hover:text-pink-500" />
              </a>
              <a href="https://github.com/avinashsinghwk" target="_blank" rel="noopener noreferrer">
                <Github className="text-pink-600 hover:text-pink-700" />
              </a>
            </div>
          </div>

          {/* Manish Yadav */}
          <div className="text-center">
            <img
              src="/manish.jpeg"
              alt="Field Coordinator"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-b-4 border-stone-700"
            />
            <h3 className="text-xl font-semibold">Mr. Manish Yadav</h3>
            <p className="text-gray-600">Social Media Head</p>
            <div className="flex justify-center space-x-4 mt-3">
              <a href="https://www.linkedin.com/in/manish-kumar-595666203/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-pink-400 hover:text-pink-500" />
              </a>
              <a href="https://www.instagram.com/weirdmanish/" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-pink-600 hover:text-pink-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
