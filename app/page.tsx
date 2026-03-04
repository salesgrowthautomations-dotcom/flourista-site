import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white scroll-smooth">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-md border-b border-neutral-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold tracking-wide">Flourista</h1>
          <div className="space-x-6 text-sm">
            <a href="#menu" className="hover:text-neutral-400">Menu</a>
            <a href="#gallery" className="hover:text-neutral-400">Gallery</a>
            <a href="#contact" className="hover:text-neutral-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">

        <Image
          src="/cafe.jpg.webp"
          alt="Cafe"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-7xl md:text-8xl font-extrabold mb-6">
            Café Flourista
          </h1>

          <div className="w-24 h-[2px] bg-white mb-6"></div>

          <p className="text-xl text-neutral-300 max-w-2xl mb-10">
            Crafted coffee. Elegant ambience. Timeless moments.
          </p>

          <a
            href="#menu"
            className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            Discover Menu
          </a>
        </div>

      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Specials</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-neutral-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">Signature Cappuccino</h3>
            <p className="text-neutral-400">Rich espresso with velvety milk foam.</p>
          </div>

          <div className="bg-neutral-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">Belgian Chocolate Cake</h3>
            <p className="text-neutral-400">Decadent and handcrafted daily.</p>
          </div>

          <div className="bg-neutral-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">Classic Cold Brew</h3>
            <p className="text-neutral-400">Slow-steeped for 18 hours perfection.</p>
          </div>

        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Gallery</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="relative h-64 rounded-2xl overflow-hidden">
            <Image
              src="/coffee.jpg.webp"
              alt="Coffee"
              fill
              className="object-cover hover:scale-110 transition duration-500"
            />
          </div>

          <div className="relative h-64 rounded-2xl overflow-hidden">
            <Image
              src="/cake.jpg.webp"
              alt="Cake"
              fill
              className="object-cover hover:scale-110 transition duration-500"
            />
          </div>

          <div className="relative h-64 rounded-2xl overflow-hidden">
            <Image
              src="/cafe.jpg.webp"
              alt="Cafe"
              fill
              className="object-cover hover:scale-110 transition duration-500"
            />
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-neutral-900 text-center">
        <h2 className="text-4xl font-bold mb-6">Visit Us</h2>
        <p className="text-neutral-400 mb-6">Mangalore, Karnataka</p>

        <a
          href="https://wa.me/919999999999"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-neutral-200 transition"
        >
          Book on WhatsApp
        </a>
      </section>

    </main>
  );
}