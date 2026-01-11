import coverPic from "../assets/coverpic.png";
import forestImage from "../assets/footerImage.jpeg";

import BtnCompo from "../components/BtnCompo";
import ImageFormat from "../components/ImageFormat";

const Home = () => {
  // TEMP: replace with backend role later
  const role = "individual";

  return (
    <div className="relative w-full overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full">
        {/* Background Image */}
        <img
          src={coverPic}
          alt="Home page cover"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%), linear-gradient(to right, rgba(0,0,0,0.7) 20%, transparent 90%)",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col gap-6 pt-[17vh] pl-20 max-w-4xl">
          <div className="border-b-2 border-r-2 border-[#dc9e0d] w-fit px-2">
            <h1 className="text-white font-bold tracking-wide">ACT NOW</h1>
          </div>

          <h1
            className="text-white text-5xl font-bold leading-relaxed tracking-wide"
            style={{ fontFamily: "Abril Fatface" }}
          >
            This Earth Season, stand <br />
            with nature and restore <br />
            a planet rapidly losing its <br />
            balance
          </h1>

          <button
            className="mt-6 w-[180px] py-3 bg-[#ac7b06] text-white font-bold tracking-widest"
            style={{ fontFamily: "Oswald" }}
          >
            GET START →
          </button>
        </div>

        {/* ================= SEE MORE STRIP ================= */}
        <div className="absolute bottom-20 left-20 right-0 z-10">
          <div className="flex items-center gap-6 mb-6">
            <h5 className="text-white font-bold">SEE MORE</h5>
            <div className="flex-1 h-[1px] bg-white" />
          </div>

          <div className="flex gap-4 overflow-hidden max-w-xl">
            {[1, 2, 3, 4].map((_, i) => (
              <ImageFormat
                key={i}
                src={coverPic}
                alt={`preview-${i}`}
                className="w-40 flex-shrink-0"
                crop={i === 3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOREST LOSS SECTION ================= */}
      <section className="py-20 px-16 bg-white">
        <div className="max-w-7xl mx-auto flex items-center gap-16">
          <div className="flex-1">
            <p className="text-gray-500 uppercase tracking-wider mb-4 font-semibold">
              ACT NOW
            </p>

            <h3 className="text-5xl font-bold text-green-800 mb-6 leading-tight">
              We lose forests every single minute
            </h3>

            <p className="text-gray-700 text-lg mb-8">
              An area of rainforest the size of 20 football fields disappears
              every minute due to logging and agriculture.
            </p>

            <button className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 rounded font-semibold transition">
              Read More
            </button>
          </div>

          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1574870111867-089730e5a72b?w=800"
              alt="Deforestation"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ================= FULL FOREST IMAGE ================= */}
      <section className="w-full h-[800px]">
        <img
          src={forestImage}
          alt="Lush forest"
          className="w-full h-full object-cover"
        />
      </section>
    </div>
  );
};

export default Home;