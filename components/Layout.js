import NavBar from "./NavBar";
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillPhone } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';

const Layout = ({ children }) => (
  <>
    <NavBar />
    <main className="container py-4">{children}</main>

    <footer id="contact_me">
      <div className="bg-dark text-light text-center">
        <h4 className="container p-4">&copy; Lisi Gonzalez</h4>
        <div>
          <a href="https://www.linkedin.com/in/lisi-gonzalez/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size={30} className="icon" /> Lisi Gonzalez
          </a>
        </div>
        <div>
          <a href="https://api.whatsapp.com/send?phone=5493518034317" target="_blank" rel="noopener noreferrer">
            <AiFillPhone size={30} className="icon" /> +5493518034317
          </a>
        </div>
        <div>
          <a href="mailto:lisidanielagonzalez@gmail.com" target="_blank" rel="noopener noreferrer">
            <AiFillMail size={30} className="icon" /> lisidanielagonzalez@gmail.com
          </a>
        </div>
        <br />
        <p>2022 - {new Date().getFullYear()} </p>
      </div>
    </footer>
  </>
);

export default Layout;
