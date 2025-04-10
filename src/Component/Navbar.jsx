import { Link } from "react-router-dom";
import ToggleThemeButton from "./ToggleThemeButton";
// import ToggleButton from "./themeButton";
const Navbar = () => {
  return (
    <>
    <div className=" px-20  flex w-full justify-between items-center border-3 border-blue-600">
     <Link to="/"> 
     {/* Image for navbar commented */}
     {/* <img
        className="w-28 cursor-pointer  "
        src="src/assets/toolbox.png"
        /> */}
      <h1 className="text-3xl ml-10 hover:text-blue-400">Harsh</h1>
      </Link>
      <ul className="list style none flex gap-10 font-mono text-xl underline-offset-4">
        <li className="hover:underline decoration-white cursor-pointer transition-all duration-300 text-2xl">
          <Link to="/blogs">Blogs</Link>
        </li>
        <li className=" items-center align-center flex mt-2 ml-3"><ToggleThemeButton/></li>
        {/* <li><ToggleButton/></li>    */}
        {/* current not in work will checkout in future  */}
        {/* <li className="hover:underline decoration-red-400 cursor-pointer transition-all duration-300">
          <Link to="/project">Project</Link>
          </li> */}
        {/* <li className="hover:underline decoration-red-400 cursor-pointer transition-all duration-300">
        <Link to="/about">About</Link>
        </li> */}
      </ul>
    </div>
        </>
  );
};
export default Navbar;
