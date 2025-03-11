import { GraduationCap, Home, Wallet } from "lucide-react";
import { SuccessStory } from "./SuccessStory";

export function ImpactSection(){
    return <section id="impact" className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">Our Impact</h2>
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <div className="text-center">
          <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Wallet className="text-pink-600" size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-2">75%</h3>
          <p className="text-gray-600">Income increase for women completing vocational training</p>
        </div>
        <div className="text-center">
          <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="text-pink-600" size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-2">90%</h3>
          <p className="text-gray-600">Field staff from communities served</p>
        </div>
        <div className="text-center">
          <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Home className="text-pink-600" size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-2">10,000+</h3>
          <p className="text-gray-600">Individuals empowered since 2019</p>
        </div>
      </div>

      {/* Success Story */}
      <div className='flex flex-col gap-4'>
        <SuccessStory title={"Breaking Barriers, Building Futures: Sunita’s Journey to Empowerment"} description={"Sunita, a 24-year-old woman from a rural background, faced societal restrictions that limited her education and career aspirations."}><p>Sunita grew up in a small village where girls were expected to prioritize household duties over education. Despite being a bright student, she was forced to drop out of school due to financial constraints and societal pressure. With no career prospects, she felt trapped in a life that offered her little control over her future. Her dreams of becoming financially independent seemed impossible—until she discovered Apareemita Humanitarian.</p><br />
          <p>Through our women empowerment program, Sunita was enrolled in a tailoring and entrepreneurship training course. Along with skill-building, she received mentorship and financial literacy training to help her set up a small business. Apareemita also provided her with a micro-loan to purchase a sewing machine and fabric, giving her the resources needed to start her own tailoring shop.
          </p>
          <br />
          <p>Today, Sunita is not only financially independent but also an inspiration to other women in her village. She employs two other women in her shop and actively advocates for girls' education. Her success has challenged traditional norms, proving that when given the right opportunities, women can break barriers and build a future of their own choosing.</p></SuccessStory>
        <SuccessStory title={"Embracing Diversity, Ensuring Rights: Abhay’s Fight for Acceptance"} description={"Abhay, a young transgender individual, struggled with discrimination and lack of opportunities."}><p>Abhay always knew he was different, but growing up in a conservative environment, he struggled to embrace his identity. As a transgender individual, he faced rejection from his family, discrimination in schools, and constant harassment in public spaces. With no emotional or financial support, he found himself isolated and hopeless, unsure of where he belonged in society."</p>
          <br />
          <p>Apareemita Humanitarian stepped in at a crucial time, offering Abhay a safe space where he could express himself without fear. He received counseling to rebuild his confidence, legal assistance to obtain identity documents that reflected his true self, and access to vocational training. Through our job placement initiative, Abhay secured a position at a progressive company that values diversity and inclusion.
          </p><br /><p>Today, Abhay is thriving in his professional career and has become an outspoken advocate for LGBTQ+ rights. He works closely with Apareemita to support others facing similar struggles, helping them find acceptance and opportunities to live with dignity. His journey from rejection to self-acceptance is a testament to the power of community and the impact of inclusive support systems.
          </p></SuccessStory>
        <SuccessStory title={"A New Beginning, A Dignified Life: Meera’s Transformation"} description={"After years in the sex trade due to unfortunate circumstances, Meera longed for a fresh start."}>
          <p>Meera’s life took an unfortunate turn when she was forced into the sex trade due to financial struggles and lack of alternatives. For years, she endured exploitation, societal stigma, and an existence she wished to escape from. She longed for a fresh start but had no idea how to rebuild her life outside of the industry.</p>
          <br />
          <p>When she connected with Apareemita Humanitarian, she was introduced to rehabilitation programs that provided counseling, legal aid, and vocational training. Initially hesitant, Meera gradually found hope as she learned new skills in retail management and entrepreneurship. With financial support from Apareemita, she opened a small grocery shop, allowing her to earn a respectable livelihood.</p>
          <br />
          <p>Now, Meera stands as a beacon of hope for others who wish to leave the sex trade behind. She shares her experiences with women facing similar struggles, encouraging them to seek support and believe in second chances. Her transformation from victim to entrepreneur is proof that with the right support system, anyone can reclaim their dignity and shape a better future.</p></SuccessStory>
      </div>
    </div>
  </section>
}