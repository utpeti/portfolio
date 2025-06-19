const Technologies = () => {
  return (
    <div data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center mt-10">
          <h2 className="text-3xl font-bold mb-5">Technologies</h2>
          <p className="text-lg text-center max-w-2xl">
            I have experience with a variety of technologies, including:
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-8">
          {["JavaScript", "TypeScript", "Java", "C", "C++", "C#", "Python", "HTML/CSS", "React", "Node.js", "Spring", "NestJS", "Flask", "MongoDB", "MySQL", "MSSQL"].map((tech) => (
            <span key={tech} className="m-2 p-2 rounded-lg shadow-md text-3xl">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
