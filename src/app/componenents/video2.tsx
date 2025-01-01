const Video2 = () => {
  return (
    <section className="bg-image1 bg-black px-4 py-8 md:px-8">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl text-white font-bold mb-4 hover:scale-110 lg:hover:scale-125 transition-transform duration-200">
          Electronic Items Store
        </h1>
        
        {/* Subtitle */}
        <p className="text-base sm:text-lg font-bold text-white mb-4 hover:scale-125 lg:hover:scale-125 transition-transform duration-200">
          Watch Video Clip
        </p>
        
        {/* Video Embed */}
        <div className="flex justify-center items-center">
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/c8WK3PQfwXg?si=iCYTqGgbcKrKAczG"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full max-w-3xl aspect-video rounded-2xl"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video2;
