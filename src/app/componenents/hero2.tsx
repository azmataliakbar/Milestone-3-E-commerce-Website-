import Image from "next/image";

const Hero2 = () => {
  return (
    <section className="bg-blue-100 p-8 md:p-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left">
        {/* Text Content */}
        <div className="mt-6 md:mt-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-blue-700 font-bold mb-4 hover:scale-125 hover:text-red-500">
            Exclusive Offers
          </h2>
          <p className="text-xs sm:text-lg md:text-xl text-blue-700 font-bold hover:scale-125">
            Limited-time deals and discounts await.
          </p>
        </div>

        {/* Image */}
        <Image
          src="/gag1.jpg"
          alt="Hero 2 Image"
          width={500}
          height={300}
          className="rounded-2xl hover:scale-110"
        />
      </div>
    </section>
  );
};

export default Hero2;
