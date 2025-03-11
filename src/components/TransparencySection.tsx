import { HandHeart, Heart, PieChart } from "lucide-react";

export function TransparencySection(){
    return <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">Transparency & Financials</h2>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="text-center">
          <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <HandHeart className="text-pink-600" size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Programs</h3>
          <p className="text-3xl font-bold text-pink-600 mb-2">80%</p>
          <p className="text-gray-600">Directly supports our initiatives</p>
        </div>
        <div className="text-center">
          <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <PieChart className="text-pink-600" size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Administrative</h3>
          <p className="text-3xl font-bold text-pink-600 mb-2">10%</p>
          <p className="text-gray-600">Essential operational costs</p>
        </div>
        <div className="text-center">
          <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="text-pink-600" size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Fundraising</h3>
          <p className="text-3xl font-bold text-pink-600 mb-2">10%</p>
          <p className="text-gray-600">Future resource development</p>
        </div>
      </div>
    </div>
  </section>
}