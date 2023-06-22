import Layout from "../../components/Layout";
import skills from "../../profile"; 

export default function Home() {
  return (
    <Layout>
    <div className="d-flex">
      <div className="flex-grow-1 mr-12">
        <h2 className="text-center">Hello there! Lisi here</h2>
        <h5 className="text-center mt-3">
          I consider myself a curious individual who is constantly seeking personal and professional growth. As a Full Stack Developer, my passion lies in front-end development and design. I thoroughly enjoy bringing ideas to life through creative and innovative projects, both in terms of design and project outcomes.
        </h5>
        <br />
        <h5 className="text-center">
          I'm a proactive learner who stays updated with the latest technologies and industry trends. I thrive on challenges, constantly expanding my skill set and embracing new possibilities. Collaboration is important to me, and I enjoy working with talented professionals to turn ideas into reality.
        </h5>
        <br />
        <h5 className="">
          My portfolio showcases my expertise in front-end development, design skills, and creative problem-solving. Feel free to explore my projects and experience the blend of functionality and aesthetics.
        </h5>
        <br />
        <h5 className="text-center">
          Let's embark on an innovative journey, bringing captivating ideas to life. I'm excited to collaborate on future projects and contribute to the ever-evolving world of technology.
        </h5>
        <br />
      </div>
      <div className="flex-grow-0 mt-12 ml-12">
        <img src="a.jpg" alt="" className="img-fluid" style={{ maxWidth: "300px" }} />
      </div>
    </div>

    <div className="row py-2">
  <div className="col-md-4">
    <div className="card border-secondary mb-3">
      <h1 className="card-header text-secondary">Skills</h1>
      <div className="card-body">
        {skills.map((item, index) => (
          <div key={index} className="d-flex align-items-center">
            <img src={item.icon} alt={item.name} className="img-fluid icon-img" />
            <h3 className="ml-3">{item.name}</h3>
          </div>
        ))}
          </div>
        </div>
      </div>  
    </div>
  </Layout>
  )
}
