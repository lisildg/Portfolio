import projects from "../../Projects";
import Layout from "../../components/Layout";
import skills from "../../skills";

export default function Home() {
  return (
    <Layout>
      <div className="d-flex flex-wrap align-items-center justify-center mx-auto">
        <div className="flex-grow-1 mr-12 max-w-lg">
          <h2 className="text-center" id="About_me">
            Hello there! Lisi here
          </h2>
          <p className="text-align-center text-info">
            As a Full Stack Developer, I am a curious individual dedicated to
            personal and professional growth. My passion lies in front-end
            development and design, where I bring ideas to life through creative
            projects.
          </p>
          <p className="text-align-center text-info">
            {" "}
            I thrive on challenges, expanding my skill set and embracing new
            possibilities. Collaboration is important to me, and I enjoy working
            with talented professionals to turn ideas into reality.
          </p>
          <p className="text-align-center text-info">
            Additionally, I am currently learning about UX/UI design to further
            enhance my skills.
          </p>
          <br />
        </div>
        <div className="flex-grow-0 mt-12 ml-12 mb-5">
          <img
            src="a.jpg"
            alt=""
            className="img-fluid"
            style={{ maxWidth: "300px" }}
          />
        </div>
      </div>

      <div className="flex center mt-12 ml-12 mb-5">
        <img
          src="microsoft-certified-azure-fundamentals.png"
          style={{ maxWidth: "300px" }}
        />
      </div>

      <div className="row min-h-100">
        <h1 className="text-danger text-center font-bold mb-4" id="projects">
          Projects
        </h1>
        {projects.map(({ name, description, image, site, techStack }, i) => (
          <div key={i} className="col-md-4" style={{ minHeight: "560px" }}>
            <div
              className="card border-danger mb-3"
              style={{ minHeight: "100%" }}
            >
              <h1 className="card-header">{name}</h1>
              <div className="card-body d-flex flex-column ">
                <img src={`/${image}`} alt="" />
                <br />
                <div className="d-flex align-items-center text-danger">
                  <p className="text-center">{description}</p>
                </div>
                <div className="d-flex align-items-center">
                  <p className="text-center ">Tech Stack: {techStack}</p>
                </div>

                <a
                  href={site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-danger"
                >
                  See More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row min-h-100 mt-4">
        <h1 className="text-warning text-center font-bold mb-4" id="projects">
          Desing Projects
        </h1>
      </div>
      <div className="card border-warning">
        <h1 className="card-header text-warning mb-3">coming soon...</h1>
        <p className="text-align-center m-4 text-warning">
          I'm currently working on a UX design project using Figma to create the
          layout for an e-commerce website. Once it's nearly finished, I'll
          upload it, and you'll be able to see it
        </p>
        <div className="card-body d-flex flex-wrap"></div>
      </div>

      <div className="row py-2 mt-4">
        <div className="card border-secondary">
          <h1 className="card-header text-secondary mb-3">Skills</h1>
          <div className="card-body d-flex flex-wrap">
            {skills.map((item, index) => (
              <div
                key={index}
                className="d-flex align-items-center flex-fill mr-4"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="img-fluid icon-img"
                />
                <h3 className="ml-3">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
