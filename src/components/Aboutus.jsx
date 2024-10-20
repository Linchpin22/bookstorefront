import React from "react";
import { Link } from "react-router-dom";

const Aboutus = () => {
  return (
    <div className="bg-gray-100 dark:bg-slate-900 dark:text-white py-12">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            We are a passionate team committed to delivering excellence in everything we do. Our goal is to provide high-quality products and services that make a real difference in people's lives.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="flex flex-col md:flex-row items-center justify-between my-16">
          <div className="md:w-1/2">
            <img
              src="https://images.stockcake.com/public/e/a/1/ea12e6e8-ec62-44bc-9b8c-6915e221776c_large/planning-strategy-session-stockcake.jpg"
              alt="Our Mission"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-10 mt-8 md:mt-0">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our mission is to innovate and offer top-tier solutions that solve real-world problems. We believe in empowering people through technology and continuously strive to exceed customer expectations by offering cutting-edge services.
            </p>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="bg-white dark:bg-slate-800 py-12 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We adhere to the highest standards of ethics and honesty in all of our dealings.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Constantly striving to push the boundaries of what’s possible.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Customer Focus</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our customers are at the heart of everything we do, and their satisfaction is our top priority.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="my-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Meet Our Team</h2>
          <div className=" justify-center">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                src="https://images.stockcake.com/public/e/4/e/e4e5e101-4833-4e43-a1ba-f1364e61a8fd_large/sunset-silhouette-portrait-stockcake.jpg"
                alt="Team Member 1"
                className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Anuj Tiwari</h3>
              <p className="text-gray-700 dark:text-gray-300">CEO & Founder</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold mb-4">Join Our Journey</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            We are always on the lookout for passionate and talented individuals who share our vision. If you’re interested in being a part of our story, feel free to reach out!
          </p>
          <Link to="/contact"  className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
