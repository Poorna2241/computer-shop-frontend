export default function AboutPage() {
    return (
            <div className="bg-gray-50 text-gray-800">
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Our Store
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Your trusted destination for high-quality computer hardware,
          accessories, and technology solutions.
        </p>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Text */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="mb-4">
              At <span className="font-bold">Your Store Name</span>, we are passionate about
              technology and committed to delivering the best products and services.
              Whether you're a gamer, student, or professional, we’ve got you covered.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Our Mission</h2>
            <p>
              To provide reliable, affordable, and cutting-edge technology solutions
              that meet the needs of every customer.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
              alt="Computer shop"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          What We Offer
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {[
            "Laptops & Desktop Computers",
            "Computer Components (CPU, RAM, SSD)",
            "Gaming Accessories",
            "Custom PC Building",
            "Repair & Maintenance",
            "Networking & Cables",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          {[
            "High-quality genuine products",
            "Affordable pricing",
            "Expert technical support",
            "Fast and reliable service",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow"
            >
              ✔ {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white text-center py-12 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Need Help Choosing?
        </h2>
        <p className="mb-6">
          Our team is always ready to help you find the perfect solution.
        </p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-xl font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>

    </div>
    );

}