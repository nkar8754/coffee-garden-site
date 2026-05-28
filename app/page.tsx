'use client';

import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const floating = {
  initial: { y: 0, opacity: 0.25 },
  animate: (i: number) => ({
    y: [-12, 12, -12],
    opacity: [0.15, 0.35, 0.15],
    transition: {
      duration: 6 + i,
      repeat: Infinity,
      ease: "easeInOut"
    }
  })
};

const particles = [
  { top: "12%", left: "20%" },
  { top: "30%", left: "75%" },
  { top: "55%", left: "40%" },
  { top: "70%", left: "15%" },
  { top: "82%", left: "60%" },
  { top: "20%", left: "90%" },
  { top: "40%", left: "10%" },
  { top: "65%", left: "80%" },
  { top: "15%", left: "55%" },
  { top: "50%", left: "92%" },
  { top: "88%", left: "35%" },
  { top: "35%", left: "65%" }
];

export default function Home() {
  const [open, setOpen] = useState(false);

  const [mousePosition, setMousePosition] = useState({
  x: 0,
  y: 0
});

const handleMouseMove = (e) => {
  setMousePosition({
    x: e.clientX,
    y: e.clientY
  });
};

  const address = "878 E 900 S, Salt Lake City, UT 84105";
  const mapQuery = encodeURIComponent(address);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: "Coffee Garden SLC",
    address,
    url: "https://coffeegardenslc.com",
    servesCuisine: "Coffee, Pastries",
    priceRange: "$"
  };

  return (
    <main
  onMouseMove={handleMouseMove}
  className ="min-h-screen text-stone-100 bg-[#0b0705] relative overflow-hidden">

    <motion.div
  className="pointer-events-none fixed inset-0 z-0"
  animate={{
    background: `radial-gradient(
      600px at ${mousePosition.x}px ${mousePosition.y}px,
      rgba(255, 180, 80, 0.16),
      transparent 80%
    )`
  }}
  transition={{
    type: "tween",
    ease: "linear",
    duration: 0.08
  }}
/>

      <div className="pointer-events-none fixed inset-0">
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full bg-amber-700/10 blur-[140px]"
          animate={{
            x: ["10%", "60%", "20%"],
            y: ["20%", "50%", "30%"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-orange-600/10 blur-[160px]"
          animate={{
            x: ["70%", "30%", "60%"],
            y: ["60%", "20%", "50%"]
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-yellow-800/10 blur-[180px]"
          animate={{
            x: ["40%", "20%", "80%"],
            y: ["80%", "40%", "10%"]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="pointer-events-none fixed inset-0 opacity-30 mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {particles.map((pos, i) => (
        <motion.div
          key={i}
          custom={i as number}
          variants={floating}
          initial="initial"
          animate="animate"
          className="pointer-events-none fixed w-1.5 h-1.5 rounded-full bg-amber-300/30"
          style={{
            top: pos.top,
            left: pos.left
          }}
        />
      ))}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        <a
          href="https://coffeegardenslc.mobilebytes.com/menu"
          className="block text-center bg-amber-700 text-white py-3 rounded-full shadow-lg hover:bg-amber-600 transition"
        >
          Order Coffee Now
        </a>
      </div>

      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40 backdrop-blur-md sticky top-0 z-40">
        <div className="font-bold text-xl text-amber-200 font-display">
          Coffee Garden SLC
        </div>

        <div className="hidden md:flex gap-6 text-sm text-stone-200">
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#location">Location</a>
          <a href="#reviews">Reviews</a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden px-3 py-1 border border-white/20 rounded text-stone-200"
        >
          Menu
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#1a0f0a]/95 border-b border-white/10 px-6 py-4 flex flex-col gap-3 text-sm text-stone-200">
          <a href="#menu" onClick={() => setOpen(false)}>Menu</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#gallery" onClick={() => setOpen(false)}>Gallery</a>
          <a href="#location" onClick={() => setOpen(false)}>Location</a>
          <a href="#reviews" onClick={() => setOpen(false)}>Reviews</a>
        </div>
      )}

      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="relative h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000')"
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative text-stone-100 px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg font-display">
            Coffee. Community. Comfort.
          </h1>

          <p className="text-lg md:text-2xl mb-8 text-stone-300 max-w-2xl mx-auto">
            A warm neighborhood café in the heart of Salt Lake City —
            crafted espresso, cozy study corners, and the perfect place
            to slow down.
          </p>

          <a
            href="#menu"
            className="inline-block bg-amber-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-amber-600 hover:scale-105 transition"
          >
            Explore Menu
          </a>
        </div>
      </motion.section>

      <section
        id="menu"
        className="px-6 py-24 bg-[#120b07]/60 backdrop-blur-md"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-amber-200 text-center font-display">
            Popular Picks
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Iced Latte",
                desc: "Smooth espresso balanced with creamy milk.",
                img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200"
              },
              {
                title: "Caramel Macchiato",
                desc: "Sweet caramel layered over rich espresso.",
                img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200"
              },
              {
                title: "Breakfast Sandwich",
                desc: "Fresh-made and perfect for morning study sessions.",
                img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1200"
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#2a1710]/80 border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:border-amber-500/30 hover:-translate-y-1 transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <h3 className="font-semibold mb-2 text-2xl text-stone-100 font-display">
                    {item.title}
                  </h3>

                  <p className="text-sm text-stone-400">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://coffeegardenslc.mobilebytes.com/menu"
              className="inline-block bg-amber-700 text-white px-8 py-4 rounded-full shadow-md hover:bg-amber-600 hover:scale-105 transition"
            >
              Order Full Menu Online
            </a>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="px-6 py-24 bg-[#0b0705]/60 backdrop-blur-md"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 text-amber-200 font-display">
            Why Locals Love Coffee Garden
          </h2>

          <p className="text-lg text-stone-300 leading-8 max-w-3xl mx-auto">
            More than just coffee — Coffee Garden is a place to study,
            connect, relax, and recharge. Whether you're grabbing a quick
            espresso or spending the afternoon working with friends,
            the atmosphere always feels welcoming.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {[
              "Locally loved atmosphere",
              "Comfortable study spaces",
              "Handcrafted espresso drinks"
            ].map((t) => (
              <div
                key={t}
                className="bg-[#2a1710]/80 border border-white/10 p-6 rounded-2xl text-stone-200 hover:border-amber-500/30 transition"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="px-6 py-24 bg-[#120b07]/60 backdrop-blur-md"
      >
        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold mb-12 text-amber-200 text-center font-display">
            Inside Coffee Garden
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200",
              "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200",
              "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200"
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="overflow-hidden rounded-2xl border border-white/10 shadow-xl"
              >
                <img
                  src={img}
                  className="w-full h-80 object-cover hover:scale-105 transition duration-700"
                  alt="Coffee shop"
                />
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      <section
        id="reviews"
        className="px-6 py-24 bg-[#0b0705]/60 backdrop-blur-md"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-amber-200 text-center font-display">
            What Customers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Best café in Salt Lake City. Cozy, warm, and perfect for studying.",
              "The espresso drinks are incredible and the atmosphere feels welcoming.",
              "My favorite place to work remotely and relax with coffee."
            ].map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#2a1710]/80 border border-white/10 p-8 rounded-2xl shadow-lg hover:border-amber-500/30 transition"
              >
                <p className="text-stone-300 leading-7">
                  "{r}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="location"
        className="px-6 py-24 bg-[#120b07]/60 backdrop-blur-md"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-amber-200 text-center font-display">
            Visit Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div>
              <p className="text-lg text-stone-300 leading-8">
                Located in the heart of Salt Lake City, Coffee Garden
                is the perfect neighborhood spot for morning espresso,
                study sessions, and meeting friends.
              </p>

              <p className="mt-6 text-stone-400">
                {address}
              </p>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                className="inline-block mt-8 bg-amber-700 text-white px-8 py-4 rounded-full hover:bg-amber-600 hover:scale-105 transition"
              >
                Get Directions
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <iframe
                src="https://www.google.com/maps?q=878+E+900+S+Salt+Lake+City+UT+84105&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-80"
              />
            </div>

          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-[#0b0705]/60 backdrop-blur-md">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-5xl font-bold mb-12 text-amber-200 font-display">
      Featured Video
    </h2>

    <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/PuAbIp_Dj9I"
        title="Coffee Garden Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
</section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-stone-400 bg-[#0e0705]">
        © {new Date().getFullYear()} Coffee Garden SLC
      </footer>

    </main>
  );
}