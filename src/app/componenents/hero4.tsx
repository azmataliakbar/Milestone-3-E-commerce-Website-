import Image from "next/image";

const Hero4 = () => {
  return (
    <section className="bg-blue-100 p-8 md:p-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Image */}
        <Image
          src="/phn1.jpg"
          alt="Hero 4 Image"
          width={500}
          height={400}
          className="rounded-2xl hover:scale-110"
        />
        
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-blue-700 font-bold mb-4 hover:scale-125 hover:text-red-500">
            Quality Assurance
          </h2>
          <p className="text-[14px] sm:text-lg md:text-xl text-blue-700 font-bold hover:scale-110">
            We guarantee the highest quality products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero4;
