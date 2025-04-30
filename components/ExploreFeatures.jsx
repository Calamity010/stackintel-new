export default function PromoSection() {
  return (
    <section
      className=" bg-cover h-[100vh] bg-center text-white py-20 px-4 md:px-6 lg:px-24"
      style={{
        backgroundImage: "url('/landing/explore-features.png')",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="">
          <h1 className="text-5xl md:text-5xl lg:text-8xl font-normal mb-4">
            Feel special <br className="hidden md:block" /> more often.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-4">
            Cards that go beyond payments – <br /> set custom limits, track
            expenses, add balance <br /> in seconds, and more.
          </p>
          <p className="text-md md:text-md text-pink-100 mb-8">
            Collect, manage, and share payment cards with Stackintel. Expedite
            PCI <br /> compliance and improve cardholder data security to breeze
            through your <br /> bank’s security review.
          </p>
          <button className="bg-white text-pink-600 font-semibold px-8 py-3 rounded-full shadow hover:bg-pink-100 transition">
            Explore features
          </button>
        </div>
      </div>
    </section>
  );
}
