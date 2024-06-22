
import { FaBars } from "react-icons/fa";
export const Header = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex items-center gap-2 md:h-10 md:gap-4 lg:py-8 lg:px-8">
        <img src="./assets/weather.svg" alt="logo" className="h-10 w-10" />
        <button className="bg-gradient-to-r from-orange-400 to-cyan-500 text-xs text-white md:py-1 px-2 rounded-xl md:w-[160px] text-[1.25rem]  ">
         <div className="font-mono text-xl m-2 tracking-wider " >Weatherr</div>
        </button>
      </div>
      <div className="hidden lg:flex lg:py-5">
        <ul className="lg:flex gap-12">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
        <div className="hidden lg:flex gap-2 items-center font-serif h-4 w-40 m-3 ">
          <a href="" className="text-[1.05rem]">SignIn</a>
          <button className="bg-blue-400 h-14 rounded-md px-2 text-white">Register</button>
        </div>
      <div className="lg:hidden">
        <FaBars />
      </div>
    </div>
  );
};
