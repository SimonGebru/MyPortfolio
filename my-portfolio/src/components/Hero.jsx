import simonImage from '../assets/simon.jpeg';

const Hero = () => {
  return (
    <section className="relative py-24 md:py-32 flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 bg-gray-900 text-white overflow-hidden">
      {/* Skugga i toppen */}
      <div className="absolute top-0 left-0 w-full h-8 shadow-[inset_0_8px_8px_-2px_rgba(0,0,0,0.5)] z-10" />

     {/* TEXTDEL */}
<div
  className="md:w-1/2 text-center md:text-left space-y-6"
  data-aos="fade-up"
  data-aos-duration="1000"
  data-aos-once="true"
>
  <h1 className="text-4xl md:text-5xl font-extrabold font-orbitron">
    HI, I'M <span className="text-lime-400">Simon</span>
  </h1>
  <p className="text-lg md:text-xl">
    &lt;I'm a 29-year-old developer who loves&nbsp;
    <span className="text-lime-400">building things for fun</span> /&gt;
  </p>
  <div className="text-lime-400 font-orbitron font-semibold text-xl">
    Aspiring Fullstack Developer
    <div className="text-sm text-gray-300 font-sans">
    </div>
  </div>
</div>

      {/* 🖼️ BILD */}
      <div
        className="md:w-1/2 flex justify-center mb-12 md:mb-0"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-once="true"
      >
        <div className="relative w-64 h-64 bg-lime-400 p-2 rounded-lg">
          <img
            src={simonImage}
            alt="Simon"
            className="w-full h-full object-cover rounded-md border-4 border-white"
          />
        </div>
      </div>

      {/* 🔽 Skugga i botten */}
      <div className="absolute bottom-0 left-0 w-full h-8 shadow-[inset_0_-8px_8px_-2px_rgba(0,0,0,0.5)] z-10" />
    </section>
  );
};

export default Hero;
