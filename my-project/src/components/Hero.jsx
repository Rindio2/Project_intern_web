import backgroundImage from "../img/anh-nen-den-trang_023941096.jpg";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center py-16 px-6 text-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">New Season Arrivals</h1>
        <p className="mb-8">Discover the latest fashion trends</p>
        <button className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
