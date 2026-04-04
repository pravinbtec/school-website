import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "./config";
function Home() {
  const [showAdmissionForm, setShowAdmissionForm] = useState(false);
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const [successMessage, setSuccessMessage] = useState("");

const [admissionData, setAdmissionData] = useState({
  studentName: "",
  parentName: "",
  email: "",
  phone: "",
  className: "",
});

const [admissionSuccess, setAdmissionSuccess] = useState("");
const handleChange = (e) => {
  setFormData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
   const res = await axios.post(`${API_BASE_URL}/api/contact`, formData);
    setSuccessMessage(res.data.message);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    setSuccessMessage("Something went wrong");
  }
};
const handleAdmissionChange = (e) => {
  setAdmissionData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};

const handleAdmissionSubmit = async (e) => {
  e.preventDefault();
   console.log("clicked");

  try {
    const res = await axios.post(`${API_BASE_URL}/api/admission`, admissionData);
    setAdmissionSuccess(res.data.message);
    setAdmissionData({
      studentName: "",
      parentName: "",
      email: "",
      phone: "",
      className: "",
    });
  } catch (error) {
    console.log(error);
    setAdmissionSuccess("Something went wrong");
  }
};
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <nav className="bg-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-700">Bright Future School</h1>

          <div className="hidden gap-6 md:flex">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#academics" className="hover:text-blue-600">Academics</a>
            <a href="#gallery" className="hover:text-blue-600">Gallery</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>

          <button
          onClick={() => setShowAdmissionForm(true)}
          className="rounded-full bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
          >
          Admission Open
</button>
        </div>
      </nav>

      <section id="home" className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Welcome to Our School
          </p>

          <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Shaping Young Minds for a Better Tomorrow
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            We provide quality education, modern facilities, and a safe environment
            where students can learn, grow, and achieve excellence.
          </p>

          <div className="mt-8 flex gap-4">
          <button
            onClick={() => setShowAdmissionForm(true)}
            className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Apply Now
          </button>

            <a
              href="#explore"
              className="rounded-full border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-100 inline-block"
             >
              Explore Campus
            </a>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80"
            alt="School"
            className="h-[420px] w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </section>

      <section id="about" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h3 className="mb-6 text-3xl font-bold">About Our School</h3>
          <p className="mx-auto max-w-3xl text-gray-600">
            Bright Future School is committed to providing quality education with modern teaching methods.
            We focus on academic excellence, discipline, and overall personality development of students.
          </p>
        </div>
      </section>

      <section id="academics" className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="mb-10 text-center text-3xl font-bold">Academics</h3>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-md">
              <h4 className="text-xl font-semibold text-blue-700">Primary School</h4>
              <p className="mt-2 text-gray-600">
                Strong foundation with fun learning methods.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md">
              <h4 className="text-xl font-semibold text-blue-700">Middle School</h4>
              <p className="mt-2 text-gray-600">
                Concept-based learning and skill development.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md">
              <h4 className="text-xl font-semibold text-blue-700">High School</h4>
              <p className="mt-2 text-gray-600">
                Advanced subjects with career-focused guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section  className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="mb-10 text-center text-3xl font-bold">Facilities</h3>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-6 shadow-md">
              <h4 className="text-lg font-semibold">Smart Classrooms</h4>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6 shadow-md">
              <h4 className="text-lg font-semibold">Library</h4>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6 shadow-md">
              <h4 className="text-lg font-semibold">Computer Lab</h4>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6 shadow-md">
              <h4 className="text-lg font-semibold">Playground</h4>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6 shadow-md">
              <h4 className="text-lg font-semibold">Science Lab</h4>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6 shadow-md">
              <h4 className="text-lg font-semibold">Transport</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="mb-10 text-center text-3xl font-bold">Why Choose Us</h3>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <h4 className="mb-3 text-xl font-semibold text-blue-700">Expert Teachers</h4>
              <p className="text-gray-600">
                Our experienced faculty members guide students with care, skill, and dedication.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-md">
              <h4 className="mb-3 text-xl font-semibold text-blue-700">Modern Facilities</h4>
              <p className="text-gray-600">
                Smart classrooms, labs, library, and activity spaces for complete learning.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-md">
              <h4 className="mb-3 text-xl font-semibold text-blue-700">Student Growth</h4>
              <p className="text-gray-600">
                We focus on academics, discipline, creativity, confidence, and leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="mb-10 text-center text-3xl font-bold">Our Highlights</h3>

          <div className="grid gap-6 text-center md:grid-cols-4">
            <div className="rounded-2xl bg-gray-50 p-8 shadow-md">
              <h4 className="text-4xl font-extrabold text-blue-700">1200+</h4>
              <p className="mt-2 text-gray-600">Students</p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-8 shadow-md">
              <h4 className="text-4xl font-extrabold text-blue-700">80+</h4>
              <p className="mt-2 text-gray-600">Teachers</p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-8 shadow-md">
              <h4 className="text-4xl font-extrabold text-blue-700">25+</h4>
              <p className="mt-2 text-gray-600">Awards</p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-8 shadow-md">
              <h4 className="text-4xl font-extrabold text-blue-700">15+</h4>
              <p className="mt-2 text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      <section  id="gallery" className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="mb-10 text-center text-3xl font-bold">Gallery</h3>

          <div className="grid gap-6 md:grid-cols-3">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80"
              alt="Gallery 1"
              className="h-64 w-full rounded-2xl object-cover shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Gallery 2"
              className="h-64 w-full rounded-2xl object-cover shadow-md"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1663126319781-f4de55c7ebd4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Gallery 3"
              className="h-64 w-full rounded-2xl object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="mb-10 text-center text-3xl font-bold">What Parents Say</h3>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-6 shadow-md">
              <p className="text-gray-600">
                “The teachers are caring and the learning environment is excellent.”
              </p>
              <h4 className="mt-4 font-semibold text-blue-700">Priya R.</h4>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6 shadow-md">
              <p className="text-gray-600">
                “My child has improved both academically and personally after joining here.”
              </p>
              <h4 className="mt-4 font-semibold text-blue-700">Arun K.</h4>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6 shadow-md">
              <p className="text-gray-600">
                “A modern school with great facilities and supportive staff.”
              </p>
              <h4 className="mt-4 font-semibold text-blue-700">Meena S.</h4>
            </div>
          </div>
        </div>
      </section>
      <section id="explore" className="bg-white py-16">
  <div className="mx-auto max-w-7xl px-6">
    <h3 className="mb-4 text-center text-3xl font-bold">Explore Our Campus</h3>
    <p className="mx-auto mb-12 max-w-3xl text-center text-gray-600">
      Discover our vibrant campus life, modern learning spaces, and exciting events
      that make school life meaningful and memorable.
    </p>

    <div className="mb-16">
      <h4 className="mb-8 text-2xl font-bold text-blue-700">Campus Life</h4>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="overflow-hidden rounded-2xl bg-gray-50 shadow-md">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80"
            alt="Modern classroom"
            className="h-64 w-full object-cover"
          />
          <div className="p-4">
            <h5 className="text-lg font-semibold">Smart Classrooms</h5>
            <p className="mt-2 text-sm text-gray-600">
              Interactive learning spaces designed for better understanding and engagement.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-gray-50 shadow-md">
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1000&q=80"
            alt="Students in library"
            className="h-64 w-full object-cover"
          />
          <div className="p-4">
            <h5 className="text-lg font-semibold">Library & Reading</h5>
            <p className="mt-2 text-sm text-gray-600">
              A calm and inspiring space where students build knowledge and reading habits.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-gray-50 shadow-md">
          <img
            src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1000&q=80"
            alt="Playground activity"
            className="h-64 w-full object-cover"
          />
          <div className="p-4">
            <h5 className="text-lg font-semibold">Playground & Activities</h5>
            <p className="mt-2 text-sm text-gray-600">
              Sports and outdoor activities that improve teamwork, fitness, and confidence.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h4 className="mb-8 text-2xl font-bold text-blue-700">Upcoming Events</h4>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-gray-50 p-6 shadow-md">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
            August 12
          </p>
          <h5 className="text-xl font-bold">Science Exhibition</h5>
          <p className="mt-3 text-gray-600">
            Students showcase creative science models, practical ideas, and innovations.
          </p>
        </div>

        <div className="rounded-2xl bg-gray-50 p-6 shadow-md">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
            September 05
          </p>
          <h5 className="text-xl font-bold">Teachers Day Celebration</h5>
          <p className="mt-3 text-gray-600">
            A special event to celebrate teachers with student performances and gratitude.
          </p>
        </div>

        <div className="rounded-2xl bg-gray-50 p-6 shadow-md">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
            October 01
          </p>
          <h5 className="text-xl font-bold">Sports Day</h5>
          <p className="mt-3 text-gray-600">
            A day full of energy, games, competitions, and team spirit across all classes.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      <section id="contact" className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h3 className="mb-10 text-center text-3xl font-bold">Contact Us</h3>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <h4 className="mb-4 text-xl font-semibold text-blue-700">Get in Touch</h4>
              <p className="mb-3 text-gray-600">123 Education Street, Chennai</p>
              <p className="mb-3 text-gray-600">+91 98765 43210</p>
              <p className="text-gray-600">info@brightfuture.edu</p>
            </div>

            <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-8 shadow-md">
             <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="mb-4 w-full rounded-lg border border-gray-300 p-3 outline-none"
/>
      
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="mb-4 w-full rounded-lg border border-gray-300 p-3 outline-none"
/>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="mb-4 w-full rounded-lg border border-gray-300 p-3 outline-none"
              ></textarea>
              <button
                 type="submit"
                 className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
>
                 Send Message
              </button>
              {successMessage && (
              <p className="mt-4 text-green-600">{successMessage}</p>
              )}
              {successMessage && (
              <p className="mt-4 text-green-600">{successMessage}</p>
             )}
            </form>
          </div>
        </div>
      </section>
           {showAdmissionForm && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
              <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
              <h2 className="mb-4 text-2xl font-bold text-blue-700">Admission Form</h2>

      <form onSubmit={handleAdmissionSubmit} className="space-y-4">
        <input
          type="text"
          name="studentName"
          value={admissionData.studentName}
          onChange={handleAdmissionChange}

          placeholder="Student Name"
          className="w-full rounded-lg border border-gray-300 p-3 outline-none"
        />

        <input
          type="text"
          name="parentName"
          value={admissionData.parentName}
          onChange={handleAdmissionChange}
          placeholder="Parent Name"
          className="w-full rounded-lg border border-gray-300 p-3 outline-none"
        />

        <input
          type="email"
          name="email"
          value={admissionData.email}
          onChange={handleAdmissionChange}
          placeholder="Email"
          className="w-full rounded-lg border border-gray-300 p-3 outline-none"
        />

        <input
          type="tel"
          name="phone"
          value={admissionData.phone}
          onChange={handleAdmissionChange}
          placeholder="Phone Number"
          className="w-full rounded-lg border border-gray-300 p-3 outline-none"
        />

        <select
        name="className"
        value={admissionData.className}
        onChange={handleAdmissionChange}
        className="w-full rounded-lg border border-gray-300 p-3 outline-none"
      >
          <option value="">Select Class</option>
          <option value="LKG">LKG</option>
          <option value="UKG">UKG</option>
          <option value="1st Standard">1st Standard</option>
          <option value="2nd Standard">2nd Standard</option>
          <option value="3rd Standard">3rd Standard</option>
          <option value="4th Standard">4th Standard</option>
          <option value="5th Standard">5th Standard</option>
          <option value="6th to 10th Standards">6th to 10th Standards</option>
          <option value="11th and 12th Standards">11th and 12th Standards</option>
        </select>

        <div className="flex gap-3">
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Submit
          </button>

          <button
            type="button"
            onClick={() => setShowAdmissionForm(false)}
            className="w-full rounded-lg bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-400"
          >
            Close
          </button>
        </div>
         {admissionSuccess && (
        <p className="text-green-600">{admissionSuccess}</p>
        )}

      </form>
    </div>
  </div>
)}

      <footer className="bg-blue-900 py-10 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h3 className="text-2xl font-bold">Bright Future School</h3>
          <p className="mt-3 text-blue-100">
            123 Education Street, Chennai | +91 98765 43210 | info@brightfuture.edu
          </p>
          <p className="mt-4 text-sm text-blue-200">
            © 2026 Bright Future School. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home;