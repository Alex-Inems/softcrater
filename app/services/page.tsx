"use client";

import Image from "next/image";

const services = [
  {
    title: "Web Design & Development",
    description:
      "Creating visually stunning and highly functional websites tailored to your business needs.",
    icon: "/icons/web-design.png", // Replace with your icon path
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Custom e-commerce platforms to help your business sell online effortlessly.",
    icon: "/icons/e-commerce.png", // Replace with your icon path
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your online presence with expert SEO, PPC, and social media strategies.",
    icon: "/icons/digital-marketing.png", // Replace with your icon path
  },
  {
    title: "Mobile App Development",
    description:
      "Building user-friendly mobile applications for iOS and Android platforms.",
    icon: "/icons/mobile-app.png", // Replace with your icon path
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive and user-centric interfaces to enhance user experience.",
    icon: "/icons/ui-ux.png", // Replace with your icon path
  },
  {
    title: "Custom Software Development",
    description:
      "Developing software solutions that address your unique business challenges.",
    icon: "/icons/custom-software.png", // Replace with your icon path
  },
  {
    title: "Cloud Solutions",
    description:
      "Helping your business scale with secure and efficient cloud computing services.",
    icon: "/icons/cloud.png", // Replace with your icon path
  },
  {
    title: "IT Consulting",
    description:
      "Offering expert advice to align your IT strategies with your business goals.",
    icon: "/icons/it-consulting.png", // Replace with your icon path
  },
];

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "SoftCrafters transformed our online presence with a beautiful website that truly represents our brand. Highly recommended!",
    image: "/images/testimonial1.jpg", // Replace with your image path
  },
  {
    name: "Jane Smith",
    feedback:
      "The team at SoftCrafters delivered an exceptional mobile app for our business. It's seamless, functional, and loved by our customers.",
    image: "/images/testimonial2.jpg", // Replace with your image path
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-6">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-green-500">
          Our Services
        </h1>

        {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  width={80}
                  height={80}
                />
              </div>
              <h2 className="text-xl font-semibold mb-2 text-center text-green-400">
                {service.title}
              </h2>
              <p className="text-gray-300 text-center">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-green-500 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            At SoftCrafters, we combine creativity, technology, and strategy to
            deliver exceptional solutions for your business. With a
            client-first approach and a proven track record, we help businesses
            of all sizes achieve their digital transformation goals.
          </p>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-green-500 mb-10">
            What Our Clients Say
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name} Photo`}
                  width={100}
                  height={100}
                  className="rounded-full mb-4"
                />
                <p className="text-gray-300 italic mb-4">
                  "{testimonial.feedback}"
                </p>
                <h3 className="text-green-400 font-semibold">{testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-green-500 text-black text-center py-10 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Ready to take your business to the next level?
          </h2>
          <p className="mb-6">
            Contact us today to discuss your project and see how we can help.
          </p>
          <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
