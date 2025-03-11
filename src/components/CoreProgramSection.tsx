import { Card } from "./Card";

export function CoreProgramSection(){
    return <section id="programs" className="bg-gray-50 py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">Core Programs</h2>
              <div className="grid md:grid-cols-3 gap-12">
                <Card alt="Women empowerment" src="/women.jpg" title="Empowering Women" description="Vocational training, micro-finance, and awareness campaigns create financially independent and informed women." />
                <Card src="/lgbt.jpg" alt="LGBTQ support" title="Supporting LGBTQ+ Individuals" description="Healthcare access, skill development, and safe housing foster inclusivity and equal opportunities." />
                <Card src="/worker.jpg" alt="Rehabilitation support" title="Rehabilitating Sex Workers" description="Exit strategies, education, healthcare, and childcare support enable a transition to alternative livelihoods." />
              </div>
            </div>
          </section>
}