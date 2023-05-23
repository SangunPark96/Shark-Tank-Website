import { Link } from "react-router-dom";
import './NavBar.css'
import logo from '../Assests/sharktank-logo.png'


export default function NavBar() {

    return(
        <nav className="nav-bar">
            <div id="logo">   
                <Link className="nav-link" to="/">
                    <img className="logo" src={logo} alt='logo' width="120" height="70"></img>
                </Link>
            </div> 

            <br></br>

                <Link className="pitch-link" to="/pitches/pages/">
                    Pitches
                </Link>

            <br></br>

                <Link className="contact-link" to="/contact">
                    Contact
                </Link>

            <br></br>


        </nav>
    )
}