{/*  */}
import Project from "../Component/Project";

const projects = [
    {
        title: 'Some random title',
        description: 'This is a testing descriptiong for the project just to check the UI of the project card :)'
       
    },
    {
        title : 'Some random title 2',
        description: 'This is testing 2.0'
       
    },
    {
        title : 'Some random title 3',
        description: 'This is testing 3.0'
       
    },
    {
        title : 'Some random title 4',
        description: 'This is testing 4.0'
       
    },

]

const Home =()=>{
    return(
       <div className="  mx-auto flex flex-col justify-center items-start " >
        <div className=" font-semibold text-8xl flex flex-col justify-center items-center gap-5">
            <p className="inline-flex items-center">
                Hello
                <img className="w-28 inline" src="src/assets/student.gif" alt="Image not available"/>
                 ,I'm&nbsp;
                 <span className="text-red-500">Harsh!</span>
            </p>

            <div className=" mt-10 text-4xl">Student</div> 
            {/* opensource, student */}
        </div>

        

        <div className="w-3/4  my-10 font-mono font-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, porro, corrupti consectetur sint earum minima molestias obcaecati eligendi debitis dolorum iste culpa nam repellat odio placeat voluptate autem fuga harum.
        </div>
        <div className=" flex flex-col gap-5 ">
            <h1 className="text-4xl underline underline-offset-2 decoration-red-400 flex gap-3">Projects
            <img className ="w-8"src="src/assets/rocket.svg" />
            </h1>
            {/* project div component code from here  */}
            <div className="grid grid-cols-2 gap-3 ">
                {[ ...projects].map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </div>
        
        </div>
        {/* GIF section DIV starts from here  */}
            <div className="py-5">Here is a GIF of the day!</div>
        <div className="mx-auto">
            <img className="w-fit m-5" src="src/assets/gif.gif" alt="not available" />
        </div>
       </div>
    )
}
export default Home;