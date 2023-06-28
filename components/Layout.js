import NavBar from "./NavBar";
import linkedin from "../public/linkedin.svg";
import phone from "../public/phone.svg";
import mai from "../public/mai.svg";

const Layout = ({children})=> (
    <>
    <NavBar />
    <main className="container py-4"> {children}</main>
    
    <footer id="contact_me">
        <div  className="bg-dark text-light text-center">
        <div>
            <img src="linkedin.svg" alt="LinkedIn" className="img-fluid icon-img"/>
            <span></span>
            </div>
            <div>
            <img src="phone.svg" alt="Teléfono" className="img-fluid icon-img"/>
            <span>3548034317</span>
            </div>
            <div>
            <img src="mai.svg" alt="correo electrónico" className="img-fluid icon-img"/>
            <span>lisidanielagonzalez@gmail.com</span>
            </div>
            <h4 className="container p-4">&copy; Lisi Gonzalez</h4>
            <p>2022 - {new Date().getFullYear()} </p>
        </div>
    </footer>
    
    </>
)

export default Layout;