

export default function HeroSection() {
  return (
    <div id="Home" className="bg-gray-900 text-white w-full flex justify-center items-center h-screen">
     
      <div className=" h-2/3 w-full flex flex-col md:flex-row justify-around items-center px-4">
        
        <div className="flex flex-col items-center text-center md:text-left md:items-start mb-4 md:mb-0">
          <h2 className="text-lg md:text-xl lg:text-2xl">Hello, It is me</h2>
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-primary font-bold">
            Ayesha Shahzaib
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl">
            I am a <strong className="text-primary">Front-end Developer</strong>
          </h2>
        </div>
        
        <div className="flex justify-center">
          <img src="profile.png" alt="Profile" className="w-64 md:w-80 lg:w-96 xl:w-[28rem]" />
        </div>
      </div>
    </div>
  );
}
 
