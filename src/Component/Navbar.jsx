import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" px-20 py-3 flex w-full justify-between items-center">
     <Link to="/"> <img
        className="w-20 cursor-pointer hover:animate-shake"
         src="src\assets\ninja.png"
      />
      </Link>
      <ul className="list style none flex gap-10 font-mono text-xl underline-offset-4">
        <li className="hover:underline decoration-red-400 cursor-pointer transition-all duration-300">
          <Link to="/blogs">Blogs</Link>
        </li>

        {/* current not in work will checkout in future  */}
        {/* <li className="hover:underline decoration-red-400 cursor-pointer transition-all duration-300">
          <Link to="/project">Project</Link>
        </li> */}
        {/* <li className="hover:underline decoration-red-400 cursor-pointer transition-all duration-300">
        <Link to="/about">About</Link>
        </li> */}
      </ul>
    </div>
  );
};
export default Navbar;
