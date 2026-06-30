import { useState } from "react"

const services = [
  {
    title: "Body Waxing",
    category: "Waxing",
    price: "From $35",
    time: "30 min",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
    description:
      "Smooth and gentle body waxing services for clean, soft, and refreshed skin.",
  },
  {
    title: "Brazilian Waxing",
    category: "Waxing",
    price: "From $55",
    time: "40 min",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
    description:
      "Professional Brazilian waxing with careful attention to comfort, hygiene, and smooth results.",
  },
  {
    title: "Eyebrow Threading",
    category: "Brows",
    price: "From $15",
    time: "15 min",
    image:
      "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=900&q=80",
    description:
      "Precise eyebrow threading to shape, clean, and define your brows beautifully.",
  },
  {
    title: "Hairstyling",
    category: "Hair",
    price: "From $45",
    time: "45 min",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
    description:
      "Elegant hairstyling, blowouts, and finishing touches for everyday beauty or special events.",
  },
  {
    title: "Makeup Services",
    category: "Makeup",
    price: "From $75",
    time: "60 min",
    image:
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=80",
    description:
      "Flawless makeup services for parties, weddings, photoshoots, and special occasions.",
  },
  {
    title: "Manicure",
    category: "Nails",
    price: "From $30",
    time: "35 min",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80",
    description:
      "Relaxing manicure services with nail shaping, cuticle care, polish, and a clean finish.",
  },
  {
    title: "Massage",
    category: "Wellness",
    price: "From $60",
    time: "60 min",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80",
    description:
      "Relaxing massage services designed to reduce stress and help you feel refreshed.",
  },
  {
    title: "Pedicure",
    category: "Nails",
    price: "From $40",
    time: "45 min",
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80",
    description:
      "Luxury pedicure care for smooth feet, shaped nails, polish, and complete relaxation.",
  },
  {
    title: "Waxing",
    category: "Waxing",
    price: "From $25",
    time: "25 min",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
    description:
      "Quick and gentle waxing services for brows, face, arms, legs, and other areas.",
  },
]

const reviews = [
  {
    name: "Sophia Martinez",
    text: "The salon feels so luxurious and peaceful. My hair styling was exactly what I wanted.",
  },
  {
    name: "Alaina Thorne",
    text: "The facial was amazing. My skin felt clean, fresh, and glowing after the treatment.",
  },
  {
    name: "Maya Gill",
    text: "Beautiful atmosphere, professional staff, and excellent service. I would definitely come back.",
  },
]

function App() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Hair", "Nails", "Eyes", "Skin", "Makeup"]

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory)

  return (
    <div className="min-h-screen bg-[#080706] text-[#f8f5ef]">
      <Navbar />
      <Hero />
      <Services
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        filteredServices={filteredServices}
      />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}

function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#2e261d] bg-[#080706]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#home">
          <h1 className="font-serif text-2xl font-semibold tracking-[0.25em] text-white md:text-3xl">
            FEMININE BEAUTY
          </h1>
          <p className="mt-1 text-xs font-semibold tracking-[0.35em] text-[#d6b680]">
            BEAUTY & WELLNESS
          </p>
        </a>

        <div className="hidden items-center gap-10 text-sm font-bold uppercase tracking-[0.2em] text-[#b8b5ae] md:flex">
          <a className="transition hover:text-[#d6b680]" href="#home">
            Home
          </a>
          <a className="transition hover:text-[#d6b680]" href="#services">
            Services
          </a>
          <a className="transition hover:text-[#d6b680]" href="#about">
            About
          </a>
          <a className="transition hover:text-[#d6b680]" href="#reviews">
            Reviews
          </a>
          <a className="transition hover:text-[#d6b680]" href="#contact">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-[#d6b680] px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[#d6b680] transition hover:bg-[#d6b680] hover:text-black lg:block"
        >
          Book Appointment
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-cover bg-center px-6 pt-28"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,.95), rgba(0,0,0,.74), rgba(0,0,0,.25)), url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-6 text-sm font-bold uppercase tracking-[0.5em] text-[#d6b680] md:text-lg">
          Welcome to Feminine Beauty Salon
        </p>

        <h2 className="max-w-5xl font-serif text-6xl font-semibold leading-tight text-white md:text-8xl">
          Reimagine <span className="italic text-[#d6b680]">Beauty</span>,
          <br />
          Redefine Luxury
        </h2>

        <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-[#e8e2d8] md:text-xl">
          Indulge in premium beauty services designed to reveal your confidence,
          radiance, and personal style in a relaxing salon experience.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-[#d6b680] px-8 py-4 text-center text-sm font-black uppercase tracking-[0.2em] text-black transition hover:bg-[#c29f65]"
          >
            Book via WhatsApp
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[#6f5a3b] px-8 py-4 text-center text-sm font-black uppercase tracking-[0.2em] text-white transition hover:border-[#d6b680] hover:text-[#d6b680]"
          >
            Call to Book
          </a>
        </div>

        <div className="mt-20 grid max-w-2xl grid-cols-3 gap-6 border-l border-[#3a3126] pl-6">
          <Stat number="10+" label="Years Excellence" />
          <Stat number="4.9★" label="Google Rating" />
          <Stat number="5k+" label="Clients Served" />
        </div>
      </div>
    </section>
  )
}

function Stat({ number, label }) {
  return (
    <div>
      <p className="font-serif text-3xl text-[#d6b680]">{number}</p>
      <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-[#b8b5ae]">
        {label}
      </p>
    </div>
  )
}

function Services({
  categories,
  activeCategory,
  setActiveCategory,
  filteredServices,
}) {
  return (
    <section id="services" className="bg-[#111114] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Our Offerings"
          title="Services & Pricing"
          text="From precision hair styling and bespoke colors to luxury manicures, skin therapies, lashes, and makeup artistry."
        />

        <div className="mb-16 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-7 py-3 text-sm font-black uppercase tracking-[0.18em] transition ${
                activeCategory === category
                  ? "bg-[#d6b680] text-black"
                  : "bg-[#232326] text-white hover:bg-[#302a23] hover:text-[#d6b680]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {filteredServices.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[#332a22] bg-[#171719] shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-[#d6b680]">
      <div className="relative h-64 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover opacity-80 transition duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171719] to-transparent"></div>
        <span className="absolute right-5 top-5 rounded-full bg-[#15120f] px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#d6b680]">
          {service.category}
        </span>
      </div>

      <div className="p-7">
        <h3 className="font-serif text-3xl font-semibold text-white">
          {service.title}
        </h3>

        <div className="mt-4 flex gap-5 text-sm font-bold text-[#d6b680]">
          <span>{service.price}</span>
          <span className="text-[#9c9890]">{service.time}</span>
        </div>

        <p className="mt-5 leading-7 text-[#c8c5bd]">{service.description}</p>

        <div className="mt-8 flex gap-3">
          <a
            href="#contact"
            className="flex-1 rounded-2xl bg-[#d6b680] py-3 text-center text-xs font-black uppercase tracking-[0.15em] text-black"
          >
            WhatsApp
          </a>
          <a
            href="#contact"
            className="flex-1 rounded-2xl border border-[#3a3126] py-3 text-center text-xs font-black uppercase tracking-[0.15em] text-[#d6b680]"
          >
            Call Book
          </a>
        </div>
      </div>
    </article>
  )
}

function About() {
  return (
    <section id="about" className="bg-[#080706] px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        <div className="relative rounded-3xl border border-[#332a22] bg-[#151515] p-5">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80"
            alt="Salon client"
            className="h-[520px] w-full rounded-2xl object-cover md:h-[600px]"
          />

          <div className="absolute bottom-10 right-5 rounded-3xl border border-[#332a22] bg-[#171719] p-8 shadow-2xl md:right-[-30px]">
            <p className="font-serif text-4xl text-[#d6b680]">10+</p>
            <p className="mt-2 text-sm font-black uppercase tracking-[0.2em] text-[#c8c5bd]">
              Years of Beauty Artistry
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.5em] text-[#d6b680]">
            About Feminine Beauty
          </p>

          <h2 className="mt-5 font-serif text-5xl font-semibold leading-tight text-white md:text-7xl">
            Empowering Your Confidence
          </h2>

          <div className="mt-8 h-px w-28 bg-[#d6b680]"></div>

          <p className="mt-8 text-lg font-semibold leading-8 text-[#f1ede5]">
            Feminine Beauty Salon was built on the belief that self-care is a
            necessity, not an afterthought. We create a calm, luxury space where
            every client feels seen, relaxed, and confident.
          </p>

          <p className="mt-6 leading-8 text-[#c8c5bd]">
            Our team offers professional styling, skin care, nail treatments,
            makeup, lash services, and personalized consultations with careful
            attention to detail.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <Feature title="Master Artists" text="Experienced beauty specialists." />
            <Feature title="Premium Products" text="High-quality products for hair and skin." />
            <Feature title="Bespoke Consultations" text="Treatments tailored to your needs." />
            <Feature title="Luxury Sanctuary" text="A relaxing space away from daily stress." />
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ title, text }) {
  return (
    <div className="rounded-2xl border border-[#332a22] bg-[#121214] p-6">
      <h3 className="font-serif text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-3 leading-7 text-[#b8b5ae]">{text}</p>
    </div>
  )
}

function Reviews() {
  return (
    <section id="reviews" className="bg-[#111114] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Client Love"
          title="Loved By Our Clients"
          text="Our clients trust us for professional care, premium treatments, and a relaxing salon experience."
        />

        <div className="mx-auto mb-16 flex max-w-xl items-center justify-center gap-6 rounded-3xl border border-[#332a22] bg-[#171719] p-6">
          <span className="rounded-2xl border border-[#4a3a28] bg-[#211d19] px-6 py-4 font-serif text-3xl text-[#d6b680]">
            4.9★
          </span>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#c8c5bd]">
            Based on verified client reviews
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl border border-[#332a22] bg-[#171719] p-8"
            >
              <p className="text-2xl text-[#d6b680]">★★★★★</p>
              <p className="mt-6 text-lg italic leading-8 text-[#e8e2d8]">
                “{review.text}”
              </p>
              <h3 className="mt-8 font-bold text-white">{review.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="bg-[#080706] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Plan Your Visit"
          title="Get In Touch"
          text="Ready to experience ultimate beauty? Contact us through WhatsApp or call directly to request your booking."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#332a22] bg-[#171719] p-8 md:p-10">
            <h3 className="font-serif text-3xl font-semibold text-white">
              Salon Contacts
            </h3>

            <div className="mt-8 space-y-6">
              <ContactRow label="Call Us" value="+1 (555) 123-4567" />
              <ContactRow label="WhatsApp" value="+1 (555) 123-4567" />
              <ContactRow
                label="Email"
                value="appointments@femininebeautysalon.com"
              />
              <ContactRow
                label="Address"
                value="15482 85a Ave, Surrey, BC V3S 5N7, Canada"
              />
            </div>

            <div className="my-8 h-px bg-[#332a22]"></div>

            <h3 className="font-serif text-2xl font-semibold text-white">
              Business Hours
            </h3>

            <div className="mt-6 space-y-4 text-[#c8c5bd]">
              <Hour day="Monday - Friday" time="10:00 AM - 07:00 PM" />
              <Hour day="Saturday" time="11:00 AM - 06:00 PM" />
              <Hour day="Sunday" time="11:00 AM - 02:30 PM" />
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#332a22] bg-[#171719]">
            <iframe
              title="Feminine Beauty Salon Location"
              src="https://www.google.com/maps?q=15482%2085a%20Ave,%20Surrey,%20BC&output=embed"
              className="h-full min-h-[500px] w-full grayscale"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ label, value }) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8f8a82]">
        {label}
      </p>
      <p className="mt-2 font-bold text-white">{value}</p>
    </div>
  )
}

function Hour({ day, time }) {
  return (
    <div className="flex justify-between gap-6">
      <span>{day}</span>
      <span className="font-bold text-white">{time}</span>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[#2e261d] bg-[#050504] px-6 py-12 text-center">
      <h2 className="font-serif text-3xl font-semibold tracking-[0.25em] text-white">
        FEMININE BEAUTY SALON
      </h2>
      <p className="mt-3 text-xs font-bold uppercase tracking-[0.35em] text-[#d6b680]">
        Reimagine Beauty
      </p>
      <p className="mt-8 text-xs uppercase tracking-[0.2em] text-[#8f8a82]">
        © 2026 Feminine Beauty Salon. All rights reserved.
      </p>
    </footer>
  )
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.5em] text-[#d6b680]">
        {eyebrow}
      </p>
      <h2 className="mt-5 font-serif text-5xl font-semibold text-white md:text-7xl">
        {title}
      </h2>
      <div className="mx-auto mt-8 h-px w-32 bg-[#d6b680]"></div>
      <p className="mt-8 text-lg leading-8 text-[#e8e2d8]">{text}</p>
    </div>
  )
}

export default App