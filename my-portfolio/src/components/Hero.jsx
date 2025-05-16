const Hero = () => {
    return (
      <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 bg-gray-900 text-white">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            HEJ, JAG ÄR <span className="text-lime-400">Simon</span>
          </h1>
          <p className="text-lg md:text-xl">
            &lt;Jag är en 28-årig utvecklare som gillar att&nbsp;
            <span className="text-lime-400">bygga saker</span>&nbsp;/&gt;
          </p>
          <div className="text-lime-400 font-semibold text-xl">
            Frontendutvecklare
            <div className="text-sm text-gray-300">&lt;JavaScript, React, Tailwind&gt;</div>
          </div>
        </div>
  
        <div className="md:w-1/2 flex justify-center mb-12 md:mb-0">
          <div className="relative w-64 h-64 bg-lime-400 p-2 rounded-lg">
            <img
              src="/images/simon.png" // <-- byt till din bild!
              alt="Simon"
              className="w-full h-full object-cover rounded-md border-4 border-white"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;