// import React from 'react'

import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 overflow-hidden">
      {/* Navbar */}
      <nav className="flex px-10 py-4 justify-between items-center bg-white shadow-md fixed w-full top-0 z-50">
        <div className="flex justify-center items-center">
          <img src="/green_logo.png" alt="Logo" className="h-12 w-12 md:h-14 md:w-14" />
          <h1 className="text-2xl md:text-3xl font-semibold text-green-800 ml-3">Smart School Tracker</h1>
        </div>
        <div className="mr-48 hidden md:flex gap-6 lg:gap-10 text-black ">
          {['Home', 'About', 'Features', 'Contact'].map((item) => (
            <h3 key={item} className="text-xl font-semibold cursor-pointer text-gray-800 hover:text-green-800">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </h3>
          ))}
        </div>
        <Link to={'/loginOptions'}>
        <button className="bg-green-800 px-6 py-2 rounded-md font-semibold text-white text-lg shadow-md hover:bg-green-700 transition-all cursor-pointer">
          Login
        </button>
        </Link>
      </nav>
      
      {/* Hero Section */}
      <section id="home" className="mt-14 pt-20 pb-16 px-5 w-full bg-gradient-to-r from-green-700 to-green-900 text-white flex flex-col gap-6 justify-center items-center">
        <h3 className="text-5xl font-bold animate-fadeIn">Smart School Tracker</h3>
        <p className="text-xl font-medium text-center max-w-xl animate-slideUp">
          Stay updated with your child`s school activities, attendance, and progress!
        </p>
        <Link to={'/loginOptions'}>
        <button className="mt-5 px-8 py-3 text-lg font-semibold bg-white text-green-800 rounded-md shadow-lg hover:bg-green-200 transition-all cursor-pointer">
          Get Started
        </button>
        </Link>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 flex flex-col items-center bg-gray-50 text-gray-900">
        <h3 className="text-5xl font-bold text-green-900 mb-6">About Us</h3>
        <div className="max-w-4xl text-lg font-medium text-center text-gray-700 leading-relaxed">
          <p>
            Smart School Tracker is an advanced platform designed to create a seamless connection between parents and schools.
            Our goal is to ensure transparency in education by offering real-time updates on student progress, attendance, assignments, and school events.
          </p>
          <p className="mt-6">
            We are committed to empowering parents with the right tools to stay actively involved in their child`s academic journey,
            making education more engaging and stress-free for students, guardians, and educators alike.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-[0px_0px_12px_rgba(0,0,0,0.20)] z-10  transition-all ">
            <img src="/our_mission.png" alt="Our Mission" className="w-48 h-48 object-cover rounded-full mb-5" />
            <h4 className="text-2xl font-bold text-green-800">Our Mission</h4>
            <p className="text-gray-600 mt-3">To make school communication effortless and accessible to every parent.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-[0px_0px_12px_rgba(0,0,0,0.20)] z-10  transition-all">
            <img src="/vision.png" alt="Our Vision" className="w-48 h-48 object-cover rounded-full mb-5" />
            <h4 className="text-2xl font-bold text-green-800">Our Vision</h4>
            <p className="text-gray-600 mt-3">A future where parents and schools collaborate seamlessly for better education.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="m-5 flex flex-col items-center">
        <h3 className="text-4xl font-bold text-gray-900">Key Features</h3>
        <div className="mt-10 px-10 py-3 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Attendance Tracking", desc: "Monitor student attendance in real-time and stay informed about absences." },
            { title: "Assignments & Reminders", desc: "Keep track of homework, assignments, and upcoming deadlines easily." },
            { title: "Fee Management", desc: "Simplified fee payment tracking and reminders for due payments." },
          ].map((feature, index) => (
            <div key={index} className="p-8 rounded-xl bg-green-200 shadow-xl text-gray-900 hover:scale-105 transition-all">
              <h4 className="text-2xl text-center font-bold">{feature.title}</h4>
              <p className="mt-5 text-center text-lg font-medium text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-5 w-full py-16 px-5 flex flex-col gap-5 justify-center items-center bg-gray-50">
        <h3 className="text-4xl font-bold text-gray-900">Contact Us</h3>
        <p className="text-lg font-medium text-center max-w-xl">
          Have questions? Reach out to us at <strong className="text-blue-600">support@smartschooltracker.com</strong>
        </p>
        <form method="POST" action={"https://formspree.io/f/xrbewbpg"} className="bg-green-50 shadow-xl rounded-xl w-full md:w-3/4 lg:w-1/2 md:mx-auto p-6">
          <h3 className="text-2xl font-semibold text-center">Stay in touch</h3>
          <input type="text" name="Name" placeholder="Enter your name" className="px-5 py-2 mt-5 w-full border text-lg rounded-md" required/>
          <input type="email" name="Email" placeholder="Enter your email" className="px-5 py-2 mt-5 w-full border text-lg rounded-md" required/>
          <textarea placeholder="Your message" name="message" className="px-5 h-24 py-2 mt-5 w-full border text-lg rounded-md resize-none" required></textarea>
          <button className="mt-5 rounded-lg bg-green-800 font-semibold text-lg px-8 py-3 text-white shadow-lg cursor-pointer hover:bg-green-700 transition-all">
            Send
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="mt-5 bg-green-800 py-4 text-center text-white">
        <h3 className="text-lg">Made with ❤️ by Yaswant &copy;2025 Smart School Tracker</h3>
      </footer>
    </div>
  );
};

export default LandingPage;