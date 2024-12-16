"use client";

import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-green-500">Contact Us</h1>
          <p className="text-lg text-gray-400 mt-4">
            Have questions or need assistance? We're here to help.
          </p>
        </div>

        {/* Contact Information and Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-200">Get in Touch</h2>
            <p className="text-gray-400">
              Whether you're looking to collaborate or just have a question, feel free to reach out. We’d love to hear from you!
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-green-500 text-2xl">📍</span>
                <p className="text-gray-300">
                  456 Freedom Way, Victoria Island, Lagos, Nigeria
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-green-500 text-2xl">📞</span>
                <p className="text-gray-300">+234 (701) 234-5678</p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-green-500 text-2xl">✉️</span>
                <p className="text-gray-300">contact@softstructures.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-200 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-400 font-medium"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-4 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg mt-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-400 font-medium"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-4 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg mt-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-400 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-4 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg mt-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-4 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-200 text-center mb-8">
            Visit Us
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.2861180417628!2d3.4219541417761664!3d6.428743861087396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf524f8ac95bb%3A0x71104b1918366843!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1696892401436!5m2!1sen!2sng"
            width="100%"
            height="400"
            className="rounded-lg border-0 shadow-lg"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
