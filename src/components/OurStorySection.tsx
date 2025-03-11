import { Clock, Sparkles, Users } from "lucide-react";
import { ImageSection } from "./ImageSection";

export function OurStorySection() {
  return (
    <section id="story" className="py-16 px-6 bg-gray-50">
      <div className="w-full mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          Our Story
        </h2>
        <div className="flex gap-12 flex-col lg:flex-row">
          {/* Left - Story Content */}
          <div className="p-6 md:p-20">
            <div className="flex flex-col gap-12">
              {[
                {
                  icon: <Clock className="text-pink-600" size={40} />,
                  title: "Founded in 2018",
                  description:
                    "Born from a vision to address the needs of marginalized communities in India.",
                },
                {
                  icon: <Users className="text-pink-600" size={40} />,
                  title: "Driven by Ms. Swati Sharma",
                  description:
                    "Personal experiences and unwavering commitment sparked the creation of AHA.",
                },
                {
                  icon: <Sparkles className="text-pink-600" size={40} />,
                  title: "Impacting Thousands",
                  description:
                    "Over 10,000 individuals empowered since 2019, growing from a small initiative to a recognized organization.",
                },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center gap-4">
                  <div className="bg-pink-100 p-4 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Images */}
          <ImageSection />
        </div>
      </div>
    </section>
  );
}
