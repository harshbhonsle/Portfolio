import { Link } from "react-router-dom";

const Project =({ project })=>{
    return(
        <div className="border border-gray-500 rounded-lg p-3 flex flex-col gap-2 hover:bg-gray-100 cursor-pointer">
            <h1 className="text-lg font-bold">{project.title}</h1>
            <p>{project.description}</p>
            
        </div>
    )
}
export default Project;