export function TeamSection(){
    return <section id="team" className="bg-gray-50 py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="text-center">
          <img src="/swati.jpg"
            alt="Ms. Swati Sharma"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold">Ms. Swati Sharma</h3>
          <p className="text-gray-600">Founder and President</p>
        </div>
        <div className="text-center">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQFSSuA4yLMuog/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1689560159146?e=2147483647&v=beta&t=uNyK_eCNEQDmTMSDeOVfeHA-VQsp1nnVEpv3FXSSMCw"
            alt="Program Director"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold">Mr. Avinash Singh</h3>
          <p className="text-gray-600">Chief Technology Officer</p>
        </div>
        <div className="text-center">
          <img src="/manish.jpg"
            alt="Field Coordinator"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold">Mr. Manish Yadav</h3>
          <p className="text-gray-600">Social Media Head</p>
        </div>
      </div>
    </div>
  </section>
}