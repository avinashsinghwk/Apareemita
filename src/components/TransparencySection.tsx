import { HandHeart, Heart, PieChart, FileText } from "lucide-react";

export function TransparencySection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-center mb-4">Transparency & Financials</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          We believe in complete transparency. Here’s how we allocate our resources to maximize impact.
        </p>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center transition transform hover:scale-105">
            <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <HandHeart className="text-pink-600" size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Programs</h3>
            <p className="text-3xl font-bold text-pink-600 mb-2">80%</p>
            <p className="text-gray-600">Directly supports our initiatives and community programs.</p>
          </div>

          <div className="text-center transition transform hover:scale-105">
            <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <PieChart className="text-pink-600" size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Administrative</h3>
            <p className="text-3xl font-bold text-pink-600 mb-2">10%</p>
            <p className="text-gray-600">Essential operational costs to keep us running efficiently.</p>
          </div>

          <div className="text-center transition transform hover:scale-105">
            <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Heart className="text-pink-600" size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fundraising</h3>
            <p className="text-3xl font-bold text-pink-600 mb-2">10%</p>
            <p className="text-gray-600">Ensuring sustainability and future growth.</p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="https://gamma.app/docs/Apareemita-Humanitarians-Association-6s81bwoii1ua1da?mode=doc"
            target="_blank"
            className="inline-flex items-center gap-3 px-6 py-3 bg-pink-600 text-white text-lg font-medium rounded-lg shadow-lg transition hover:bg-pink-700"
          >
            <FileText size={24} />
            View Report
          </a>
        </div>
      </div>
    </section>
  );
}
