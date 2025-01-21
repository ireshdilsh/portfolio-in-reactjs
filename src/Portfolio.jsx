import 'react'
import Typed from 'typed.js';
import "./styles/portfolio.css"
import logo from "./assets/logo.png"

export default function Portfolio() {

    
    return (
        <div>
            <nav>
                <div className="logo-name">
                    <p>.techProg</p>
                </div>
                <div className="links">
                    <a href="#portfolio">Home</a>
                    <a href="">About me</a>
                    <a href="">My Expertise</a>
                    <a href="">My Showcases</a>
                    <a href="">Get in Touch</a>
                </div>
                <div className="hire-btn">
                    <button className="btn btn-warning" style={{
                        backgroundColor: "#ffb742",
                        color:"#333",
                        fontSize: "14px",
                        fontWeight: 600,
                        height: "45px",
                        width:"120px",
                    }}>Hire Me</button>
                </div>
            </nav>

            <section id="portfolio">
               <div className="title">
                   <p>Welcome to <span>.techProg</span></p>
                   <hr/>
               </div>
                <div className="sub-title">
                    <p>Hi! Im a <span>Software Devoloper.</span></p>
                </div>
                <div className="discription">
                    <p>I’m a dedicated Software Engineer committed to building scalable and efficient software solutions.</p>
                </div>
                <div className="btns-icons">
                    <div className="showcase-btn">
                    <button className="btn btn-warning" style={{
                        backgroundColor: "#ffb742",
                        color:"#333",
                        fontSize: "14px",
                        fontWeight: 600,
                        height: "45px",
                        width:"160px",
                    }}>View Showcases</button>
                    </div>
                    <div className="contact-btn">
                    <button className="btn btn-light" style={{
                        backgroundColor: "#212529",
                        border: "1px solid #fcfcfc",
                        color:"#fcfcfc",
                        fontSize: "14px",
                        fontWeight: 600,
                        height: "45px",
                        width:"160px",
                    }}>Get in Touch</button>
                    </div>
                    <div className="icons">
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-linkedin"></i>
                    </div>
                </div>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="opacity-text">
                    <p>Hello, There !</p>
                </div>
            </section>

        </div>
    )
}
