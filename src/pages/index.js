import projects from "../../Projects";
import Layout from "../../components/Layout";
import skills from "../../skills"; 

export default function Home() {
  return (
    <Layout>
    <div className="d-flex flex-wrap align-items-center justify-center mx-auto">
      <div className="flex-grow-1 mr-12 max-w-lg">
        <h2 className="text-center" id="About_me">Hello there! Lisi here</h2>
        <p className="text-aling-center text-info">
          I consider myself a curious individual who is constantly seeking personal and professional growth. As a Full Stack Developer, my passion lies in front-end development and design. I thoroughly enjoy bringing ideas to life through creative and innovative projects, both in terms of design and project outcomes.
        </p>
        <br />
        <p className="text-info">
          I'm a proactive learner who stays updated with the latest technologies and industry trends. I thrive on challenges, constantly expanding my skill set and embracing new possibilities. Collaboration is important to me, and I enjoy working with talented professionals to turn ideas into reality.
        </p>
        <br /> 
      </div>
      <div className="flex-grow-0 mt-12 ml-12 mb-5">
        <img src="a.jpg" alt="" className="img-fluid" style={{ maxWidth: "300px" }} />
      </div>
    </div>

          <div className="row py-2">
        <div className="card border-secondary">
          <h1 className="card-header text-secondary mb-3">Skills</h1>
          <div className="card-body d-flex flex-wrap">
            {skills.map((item, index) => (
              <div key={index} className="d-flex align-items-center flex-fill mr-4">
                <img src={item.icon} alt={item.name} className="img-fluid icon-img" />
                <h3 className="ml-3">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
 
      <div className="row min-h-100">
        <h1 className="text-danger text-center font-bold mb-4" id="projects">Pojects</h1>
        {projects.map(({ name, description, image, site }, i) => (
          <div key={i} className="col-md-4">
            <div className="card border-danger mb-3" style={{minHeight:"560px"}}>
              <h1 className="card-header">{name}</h1>
              <div className="card-body d-flex flex-column ">
                <img src={`/${image}`} alt="" />
                <br />
                <div className="d-flex align-items-center">
                  <p className="text-center">{description}</p>
                </div>
                <a href={site} target="_blank" rel="noopener noreferrer" className="btn btn-danger">
            See More
          </a>
              </div>
            </div>
          </div>
        ))}
      </div> 

  </Layout>
  )
}
