import { useState } from "react"

const services = [
  {
    title: "Threading",
    category: "Services",
    image:
      "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=900&q=80",
    description: "Precise threading services for a clean and defined look.",
    items: ["Eyebrows", "Upper lips", "Chin", "Full face"],
  },
  {
    title: "Waxing",
    category: "Services",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
    description: "Professional waxing services for smooth and soft skin.",
    items: ["Legs", "Arms", "Brazilian", "Full body", "Bikini"],
  },
  {
    title: "Facials",
    category: "Services",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
    description: "Relaxing facial treatments to refresh and brighten your skin.",
    items: ["Herbal facial"],
  },
  {
    title: "Bleach",
    category: "Services",
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=80",
    description: "Glow-enhancing bleach services for face and body.",
    items: ["Instant glow", "Powder bleach", "Body bleach"],
  },
  {
    title: "Party Makeup",
    category: "Services",
    image:
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=80",
    description: "Beautiful party makeup with hairstyling for special events.",
    items: ["HD party makeup with hair", "Regular party makeup with hair"],
  },
  {
    title: "Bridal Makeup",
    category: "Services",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80",
    description: "Elegant bridal makeup designed for your special day.",
    items: ["HD bridal makeup", "Regular bridal makeup"],
  },
  {
    title: "Hairstyles",
    category: "Services",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
    description: "Stylish hair looks for parties, weddings, and everyday beauty.",
    items: ["Updos", "Curls", "Crimping", "Waves"],
  },
  {
    title: "Hair Cuts",
    category: "Services",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
    description: "Haircuts tailored to your face shape, style, and preference.",
    items: ["Any type of cut"],
  },
  {
    title: "Shampoo + Blow Dry",
    category: "Services",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
    description: "Fresh shampoo and smooth blow dry for a polished finish.",
    items: ["Shampoo", "Blow dry"],
  },
  {
    title: "Hair Colour",
    category: "Services",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
    description: "Professional hair colour services for a refreshed look.",
    items: ["Roots touch-up", "Global colour"],
  },
  {
    title: "Short Courses",
    category: "Courses",
    image:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=80",
    description: "Beauty training courses for beginners and learners.",
    items: ["Short beauty courses"],
  },
  {
    title: "Self Grooming",
    category: "Courses",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
    description: "Learn personal grooming skills for everyday confidence.",
    items: ["Self grooming course"],
  },
  {
    title: "State Board Exam Preparation",
    category: "Certification",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    description:
      "Preparation support for the Beauty Council State Board exam.",
    items: ["Theory preparation", "Practical preparation"],
  },
  {
    title: "Laser Hair Removal",
    category: "Additional Service",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
    description:
      "Laser hair removal using the latest Soprano Ice Platinum technology.",
    items: ["Latest technology", "Soprano Ice Platinum", "Painless treatment"],
  },
]

const reviews = [
  {
    name: "Lovepreet Pandher",
    rating: 5,
    
    text: "It was my first time going with her and I must say that she is really nice. I got my threading and waxing done and it’s not painful. Her style of providing services is really warm and welcoming, which makes you comfortable. I’ll definitely go again.",
  },
  {
    name: "Sonia Dhupar",
    rating: 5,
    
    text: "Komal made my waxing effortlessly pain free. Very friendly, comfortable and clean environment. Also gave me personalised advice. Strongly recommended.",
  },
  {
    name: "Anushka Bhadra",
    rating: 5,
   
    text: "I must say she is quite fast and confident while providing her services. She did my eyebrow threading in so less time, even I was shocked, and I quite like the shape of my eyebrow too. She is also an awesome masseuse and very soft spoken.",
  },
  {
    name: "Sowmya Rengasamy",
    rating: 5,

    text: "Visited Feminine Salon for eyebrow threading and facial. Komal ji is very kind and soft spoken. She did my eyebrows as requested and the facial massage was too good. I will visit her regularly going forward.",
  },
  {
    name: "Beant Ranjit Gill",
    rating: 5,
    text: "Komalpreet is a nice, energetic lady. I went to her for party makeup before a week at her salon. She did an amazing job. Everyone praised me a lot at the function. I am really thankful to her and highly recommend her services at reasonable prices.",
  },
]

function App() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Services", "Courses", "Certification", "Additional Service"]

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory)

  return (
      <div className="min-h-screen overflow-x-hidden bg-[#FAF6EC] text-[#f8f5ef]">
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
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#D8CBB8] bg-[#FAF6EC]/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="min-w-0">
          <h1 className="font-serif text-xl font-semibold tracking-[0.18em] text-[#3B3028] sm:text-2xl lg:text-3xl">
            FEMININE BEAUTY SALON
          </h1>
          <p className="mt-1 text-[10px] font-semibold tracking-[0.3em] text-[#6F8F72] sm:text-xs">
            BEAUTY & WELLNESS
          </p>
        </a>

        <div className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-[#756A5D] lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              className="transition hover:text-[#6F8F72]"
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-[#6F8F72] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#6F8F72] transition hover:bg-[#6F8F72] hover:text-white xl:block"
        >
          Book Appointment
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full border border-[#D8CBB8] px-4 py-2 text-sm font-bold uppercase tracking-[0.15em] text-[#6F8F72] lg:hidden"
        >
          Menu
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-[#D8CBB8] bg-[#FAF6EC] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-5 text-sm font-bold uppercase tracking-[0.2em] text-[#756A5D]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="transition hover:text-[#6F8F72]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-[#6F8F72] px-6 py-3 text-center text-white"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-cover bg-center px-4 pt-32 sm:px-6 lg:px-8"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(250,246,236,.97), rgba(250,246,236,.86), rgba(250,246,236,.25)), url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-[#6F8F72] sm:text-sm md:text-base">
            Welcome to Feminine Beauty Salon
          </p>

          <h2 className="font-serif text-5xl font-semibold leading-[0.95] text-[#3B3028] sm:text-6xl md:text-7xl lg:text-8xl">
            Soft Glow,
            <br />
            <span className="italic text-[#6F8F72]">Natural Beauty</span>
          </h2>

          <p className="mt-7 max-w-2xl text-base font-medium leading-7 text-[#756A5D] sm:text-lg md:text-xl md:leading-8">
            From waxing and eyebrow threading to hairstyling, makeup, nails,
            pedicures, and massage, we offer beauty care made personal.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-[#6F8F72] px-7 py-4 text-center text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-[#5F7663] sm:text-sm"
            >
              Book via WhatsApp
            </a>

            <a
              href="#contact"
              className="rounded-full border border-[#6F8F72] px-7 py-4 text-center text-xs font-black uppercase tracking-[0.2em] text-[#6F8F72] transition hover:bg-[#6F8F72] hover:text-white sm:text-sm"
            >
              Call to Book
            </a>
          </div>

          <div className="mt-14 grid max-w-2xl grid-cols-1 gap-6 border-l border-[#D8CBB8] pl-6 sm:grid-cols-3">
            <Stat number="10+" label="Years Excellence" />
            <Stat number="5.0★" label="Google Rating" />
            <Stat number="5k+" label="Clients Served" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ number, label }) {
  return (
    <div>
      <p className="font-serif text-3xl text-[#6F8F72]">{number}</p>
      <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-[#756A5D]">
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
    <section id="services" className="bg-[#F1E8D9] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Our Offerings"
          title="Services, Courses & Certification"
          text="Explore our beauty services, training courses, certification preparation, and advanced laser hair removal treatments."
        />

        <div className="mb-16 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-7 py-3 text-sm font-black uppercase tracking-[0.18em] transition ${
                activeCategory === category
                  ? "bg-[#6F8F72] text-black"
                  : "bg-[#FFFDF7] text-[#3B3028] hover:bg-[#E5DCCB] hover:text-[#6F8F72]"
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
    <article className="overflow-hidden rounded-3xl border border-[#D8CBB8] bg-[#FFFDF7] shadow-xl transition duration-300 hover:-translate-y-2 hover:border-[#6F8F72]">
      <div className="relative h-64 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover opacity-90 transition duration-500 hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF7] via-transparent to-transparent"></div>

        <span className="absolute right-5 top-5 rounded-full bg-[#FAF6EC] px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#6F8F72] shadow-md">
          {service.category}
        </span>
      </div>

      <div className="p-7">
        <h3 className="font-serif text-3xl font-semibold text-[#3B3028]">
          {service.title}
        </h3>

        <p className="mt-4 leading-7 text-[#756A5D]">
          {service.description}
        </p>

        <ul className="mt-6 space-y-3">
          {service.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm font-semibold text-[#3B3028]"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-[#6F8F72]"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex gap-3">
          <a
            href="#contact"
            className="flex-1 rounded-2xl bg-[#6F8F72] py-3 text-center text-xs font-black uppercase tracking-[0.15em] text-white transition hover:bg-[#5F7663]"
          >
            WhatsApp
          </a>

          <a
            href="#contact"
            className="flex-1 rounded-2xl border border-[#6F8F72] py-3 text-center text-xs font-black uppercase tracking-[0.15em] text-[#6F8F72] transition hover:bg-[#6F8F72] hover:text-white"
          >
            Call
          </a>
        </div>
      </div>
    </article>
  )
}

function About() {
  return (
    <section id="about" className="bg-[#FAF6EC] px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        <div className="relative rounded-3xl border border-[#D8CBB8] bg-[#151515] p-5">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80"
            alt="Salon client"
            className="h-[520px] w-full rounded-2xl object-cover md:h-[600px]"
          />

          <div className="absolute bottom-10 right-5 rounded-3xl border border-[#D8CBB8] bg-[#FFFDF7] p-8 shadow-2xl md:right-[-30px]">
            <p className="font-serif text-4xl text-[#6F8F72]">10+</p>
            <p className="mt-2 text-sm font-black uppercase tracking-[0.2em] text-[#756A5D]">
              Years of Beauty Artistry
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.5em] text-[#6F8F72]">
            About Feminine Beauty
          </p>

          <h2 className="mt-5 font-serif text-5xl font-semibold leading-tight text-[#3B3028] md:text-7xl">
            Empowering Your Confidence
          </h2>

          <div className="mt-8 h-px w-28 bg-[#6F8F72]"></div>

          <p className="mt-8 text-lg font-semibold leading-8 text-[#6F8F72]">
            Feminine Beauty Salon was built on the belief that self-care is a
            necessity, not an afterthought. We create a calm, luxury space where
            every client feels seen, relaxed, and confident.
          </p>

          <p className="mt-6 leading-8 text-[#756A5D]">
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
    <div className="rounded-2xl border border-[#D8CBB8] bg-[#FFFDF7] p-6">
      <h3 className="font-serif text-2xl font-semibold text-[#3B3028]">{title}</h3>
      <p className="mt-3 leading-7 text-[#756A5D]">{text}</p>
    </div>
  )
}

function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-[#F1E8D9] px-4 py-24 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Client Love"
          title="Loved By Our Clients"
          text="Real client experiences from Google reviews, highlighting our threading, waxing, makeup, facial, and massage services."
        />

        <div className="mx-auto mb-14 flex max-w-xl flex-col items-center justify-center gap-4 rounded-3xl border border-[#D8CBB8] bg-[#FFFDF7] p-6 text-center sm:flex-row">
          <span className="rounded-2xl border border-[#D8CBB8] bg-[#F1E8D9] px-6 py-4 font-serif text-3xl text-[#6F8F72]">
            5.0★
          </span>

          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#756A5D]">
            Featured Google Reviews
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex min-h-[360px] flex-col justify-between rounded-3xl border border-[#D8CBB8] bg-[#FFFDF7] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#6F8F72]"
            >
              <div>
                <p className="text-xl tracking-[0.12em] text-[#6F8F72]">
                  {"★".repeat(review.rating)}
                </p>

                <p className="mt-6 text-sm italic leading-7 text-[#3B3028]">
                  “{review.text}”
                </p>
              </div>

              <div className="mt-8 border-t border-[#D8CBB8] pt-5">
                <h3 className="font-bold text-[#3B3028]">{review.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/Feminine+Beauty+Salon/@49.157956,-122.793014,19z/data=!4m14!1m5!3m4!2zNDnCsDA5JzI4LjYiTiAxMjLCsDQ3JzM0LjkiVw!8m2!3d49.1579444!4d-122.7930278!3m7!1s0x5485d175348137a5:0x33d8330f8e331663!8m2!3d49.1580211!4d-122.7929276!9m1!1b1!16s%2Fg%2F11rxtvf39t?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full border border-[#6F8F72] px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#6F8F72] transition hover:bg-[#6F8F72] hover:text-white"
          >
            View More Google Reviews
          </a>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="bg-[#FAF6EC] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Plan Your Visit"
          title="Get In Touch"
          text="Ready to experience ultimate beauty? Contact us through WhatsApp or call directly to request your booking."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#D8CBB8] bg-[#FFFDF7] p-8 md:p-10">
            <h3 className="font-serif text-3xl font-semibold text-[#3B3028]">
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

            <div className="my-8 h-px bg-[#D8CBB8]"></div>

            <h3 className="font-serif text-2xl font-semibold text-[#3B3028]">
              Business Hours
            </h3>

            <div className="mt-6 space-y-4 text-[#756A5D]">
              <Hour day="Monday - Friday" time="10:00 AM - 07:00 PM" />
              <Hour day="Saturday" time="11:00 AM - 06:00 PM" />
              <Hour day="Sunday" time="11:00 AM - 02:30 PM" />
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#D8CBB8] bg-[#FFFDF7]">
            <iframe
              title="Feminine Beauty Salon Location"
              src="https://www.google.com/maps?q=15482%2085a%20Ave,%20Surrey,%20BC&output=embed"
              className="h-full min-h-[500px] w-full"
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
      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#756A5D]">
        {label}
      </p>
      <p className="mt-2 font-bold text-[#3B3028]">{value}</p>
    </div>
  )
}

function Hour({ day, time }) {
  return (
    <div className="flex justify-between gap-6">
      <span>{day}</span>
      <span className="font-bold text-[#3B3028]">{time}</span>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[#D8CBB8] bg-[#F1E8D9] px-6 py-12 text-center">
      <h2 className="font-serif text-3xl font-semibold tracking-[0.25em] text-[#3B3028]">
        FEMININE BEAUTY SALON
      </h2>
      <p className="mt-3 text-xs font-bold uppercase tracking-[0.35em] text-[#6F8F72]">
        Reimagine Beauty
      </p>
      <p className="mt-8 text-xs uppercase tracking-[0.2em] text-[#756A5D]">
        © 2026 Feminine Beauty Salon. All rights reserved.
      </p>
    </footer>
  )
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.5em] text-[#6F8F72]">
        {eyebrow}
      </p>
      <h2 className="mt-5 font-serif text-5xl font-semibold text-[#3B3028] md:text-7xl">
        {title}
      </h2>
      <div className="mx-auto mt-8 h-px w-32 bg-[#6F8F72]"></div>
      <p className="mt-8 text-lg leading-8 text-[#3B3028]">{text}</p>
    </div>
  )
}

export default App