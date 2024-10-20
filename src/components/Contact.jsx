import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 dark:bg-slate-900 dark:text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-xl mx-auto text-gray-700 dark:text-gray-300">
            Have questions or feedback? We'd love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
          <form>
            {/* Name */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg dark:border-slate-600 dark:bg-slate-700 dark:text-white"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg dark:border-slate-600 dark:bg-slate-700 dark:text-white"
              />
            </div>

            {/* Subject */}
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter the subject"
                className="w-full p-3 border border-gray-300 rounded-lg dark:border-slate-600 dark:bg-slate-700 dark:text-white"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                className="w-full p-3 h-32 border border-gray-300 rounded-lg dark:border-slate-600 dark:bg-slate-700 dark:text-white"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
