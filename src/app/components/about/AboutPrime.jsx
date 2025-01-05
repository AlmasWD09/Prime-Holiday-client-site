"use client"

const AboutPrime = () => {
  return (
    <>
    <section className="container mx-auto px-4 pt-20">
    <div className="p-6 font-Roboto">
      <div className="">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl lg:text-[28px] font-medium text-primary mb-4">
          About Prime Holiday Destinations
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Welcome to Prime Holiday Destinations, your gateway to unforgettable travel experiences! We are an outbound tour operator dedicated to providing all-inclusive packages to some of the most exquisite and carefully selected holiday destinations worldwide. Whether you're seeking adventure, relaxation, or cultural immersion, our expertly crafted itineraries promise to deliver the perfect vacation experience.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            As an outbound tour operator, PHD is committed to delivering seamless, all-inclusive ground packages, designed to provide travelers with everything they need for a hassle-free journey. Our packages include round-trip airport transfers, hotel accommodations, curated meal plans, and guided sightseeing tours. We also offer optional assistance in arranging flights upon request. Each package is thoughtfully designed to align with our dedication to quality, value, and convenience.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At PHD, our commitment to excellence begins with our partners. We carefully select local agents in each destination, choosing only those who meet our strict standards for reliability, professionalism, and expertise. This approach guarantees that our travelers receive the highest level of service, allowing them to enjoy a smooth and truly memorable holiday experience.
          </p>
        </div>

        {/* Right Section */}
        <div className="pt-10">
          <h2 className="text-2xl lg:text-[28px] font-medium text-primary mb-4">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 leading-relaxed mb-6">
            <li>
              <strong>Expertly Curated Destinations:</strong> Our travel specialists carefully select each destination for its unique attractions, cultural richness, and natural beauty.
            </li>
            <li>
              <strong>All-Inclusive Packages:</strong> Enjoy a stress-free holiday with our comprehensive packages, covering accommodations, meals, and a selection of sightseeing tours.
            </li>
            <li>
              <strong>Personalized Service:</strong> We tailor our packages to meet your individual preferences and needs, ensuring a personalized and memorable journey.
            </li>
            <li>
              <strong>Sustainable Travel:</strong> We are committed to responsible tourism, supporting local communities and minimizing our environmental impact.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            <strong>How to Book:</strong> Booking your dream holiday with Prime Holiday Destinations is easy. Simply visit our website, explore our range of packages, and submit an inquiry form. Our friendly team will get in touch and start planning your holiday program. We look forward to making your travel dreams come true.
          </p>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default AboutPrime
