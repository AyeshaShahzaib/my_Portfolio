import Link from "next/link"
export default function Header(){
  return(  <>
    <div class="bg-primary w-full h-16 flex items-center justify-around sm:h-12 sm:text-sm md:h-16 md:text-base lg:h-20 lg:text-lg xl:h-24 xl:text-xl gap-2" >
        <h1 class="text-text_color font-bold sm:text-xs md:text-sm lg:text-lg xl:text-3xl ">Ayesha Shahzaib</h1>
       <div class= "flex items-center justify-evenly sm:w-72 md:w-80 lg:w-88 xl:w-96 gap-2">
        <Link href="Home"><p  className="text-gray-300  font-semibold sm:text-xxs md:text-sm lg:text-base xl:text-lg ">Home</p></Link>
        <Link href="About_me"><p  className="text-gray-300  font-semibold  sm:text-xxs md:text-sm lg:text-base xl:text-lg ">About</p></Link>
        <Link href="Contact_me"><p  className="text-gray-300  font-semibold  sm:text-xxs md:text-sm lg:text-base xl:text-lg ">Contact Me</p></Link>
        </div>
    </div>
    </>
)}