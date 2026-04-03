function App() {
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

          <button className="rounded-full bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700">
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
            <button className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
              Apply Now
            </button>

            <button className="rounded-full border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-100">
              Explore Campus
            </button>
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

            <form className="rounded-2xl bg-white p-8 shadow-md">
              <input
                type="text"
                placeholder="Your Name"
                className="mb-4 w-full rounded-lg border border-gray-300 p-3 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="mb-4 w-full rounded-lg border border-gray-300 p-3 outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="mb-4 w-full rounded-lg border border-gray-300 p-3 outline-none"
              ></textarea>
              <button className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

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

export default App