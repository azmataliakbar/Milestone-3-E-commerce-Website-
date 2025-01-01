const Video1 = () => {
  return (
    <section className="bg-image2 bg-black px-4 py-8 md:px-8">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h1 className="text-lg sm:text-4xl md:text-5xl text-white font-bold mt-4 mb-4 hover:scale-110 lg:hover:scale-125 transition-transform duration-200">
          E-Commerce is a Great Solution
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg font-bold text-white mb-4 hover:scale-125 transition-transform duration-200">
          Watch Video Clip
        </p>

        {/* Video Embed */}
        <div className="flex justify-center items-center">
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/wf4F2-9UXUo?si=gIEHGlHBjvu9qifS"
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

export default Video1;
