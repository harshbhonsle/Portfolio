import { Link } from "react-router-dom";

const Project =({ project })=>{
    return(
        <div className="border border-black rounded-lg p-2 flex flex-col gap-2 hover:bg-red-500 hover: cursor-pointer ">
             <div className="text-lg font-bold ">{project.title}</div> 
            <p className="">{project.description}</p> 
            
        </div>
    )
}
export default Project;