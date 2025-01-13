import logo from '../assets/logo-fashion.png';
import "../styles/landing.css"

function Landing() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src={logo} alt="navbar-logo"/>
                </div>
                <div className="links">
                    <a href="">Home</a>
                    <a href="">About us</a>
                    <a href="">Clothes</a>
                    <a href="">Others</a>
                    <a href="">Blogs</a>
                    <a href="">Contact us</a>
                </div>
                <div className="login-btn">
                    <button type="button" style={{backgroundColor:'#6366f1',padding:'10px 30px',fontWeight:'400'}} className="btn btn-primary">Sign In</button>
                </div>
            </nav>
        </div>
    )
}

export default Landing
