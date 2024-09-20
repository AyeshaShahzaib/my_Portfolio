import Skills from "./skills";
export default function About(){
  return (
    <section id="about" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">
          About Me
        </h2>
        <p className="text-md md:text-lg lg:text-xl text-gray-300 mb-10 max-w-2xl">
        Hi! I am Ayesha Shahzaib, a dedicated frontend developer with a strong focus on crafting intuitive and engaging user interfaces. My journey in web development has equipped me with a versatile skill set, allowing me to turn complex ideas into seamless digital experiences. I thrive on solving problems through code and am passionate about bringing creative visions to life in the digital world.
        </p>
        <div className="mb-16"></div>
        <Skills />
      </div>
    </section>
  );
};

