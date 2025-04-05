import Project from "../Component/Project";

const projects = [
  {
    title: "Some random title",
    description:
      "This is a testing descriptiong for the project just to check the UI of the project card :)",
  },
  {
    title: "Some random title 2",
    description: "This is testing 2.0",
  },
  {
    title: "Some random title 3",
    description: "This is testing 3.0",
  },
  {
    title: "Some random title 4",
    description: "This is testing 4.0",
  },
];

const Home = () => {
  return (
    <div className="  mx-auto flex flex-col justify-center items-center text-center ">
      <div className=" font-semibold text-5xl flex flex-col justify-center items-center gap-5 py-2 text-center">
        <p className="inline-flex ">
          Hi, I'm&nbsp;
          <span className="text-red-500"> Harsh!</span>
        </p>

        {/* <div className=" mt-6 text-4xl border border-green-400 ">Student</div>  */}
        {/* opensource, student */}
      </div>

      {/*  */}

      <div className="w-10/12 my-3 font-mono font-normal text-l py-1  items-center flex mx-auto text-start px-6">
        Hey there! I'm Harsh, a tech enthusiast who loves breaking things just
        to build them back better. Whether it's web apps, automation scripts, or
        hardware experiments, I thrive on solving problems and pushing
        boundaries. I'm always open to learning new technologies that align with
        my work—adaptability is key in this ever-evolving tech landscape. From
        MERN stack development to creative problem-solving, I enjoy diving deep
        into tools that enhance my projects and ideas. Beyond tech, music keeps
        me inspired and fuels my creativity.
        This portfolio is my playground—a space where I showcase my projects, experiments, and passion for innovation.
      </div>

      {/* projects section */}
      <div className=" flex flex-col gap-5  px-4 py-3">
        <h1 className="text-4xl underline underline-offset-2 decoration-red-400 flex gap-3 ">
          Projects
          <img className="w-8" src="src/assets/rocket.svg" />
        </h1>
        {/* project div component code from here  */}
        <div className="project-grid grid grid-cols-2 gap-3 ">
          {[...projects].map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>

      {/* GIF section DIV starts from here  */}
      <div className="  items-center justify-center mx-auto mt-1 py-1">
        <div className="text-xl text-center w-fit mx-auto ">
          Here is the GIF of the day{" "}
        </div>
        {/* div image  */}

        <div className="mx-auto flex items-center align-center">
          <img
            className="w-fit m-5"
            src="src/assets/gif.gif"
            alt="not available"
          />
        </div>
      </div>

      {/* <div className="mt-3 mb-2 border border-green ">Here is a GIF of the day!

            <div className="mx-auto flex items-center align-center">
                <img className="w-fit m-5" src="src/assets/gif.gif" alt="not available" />
            </div>
        </div> */}
    </div>
  );
};
export default Home;
