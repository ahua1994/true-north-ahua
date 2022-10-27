import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="logo">
                <h1>
                    <Link to="/">
                        <span>True North</span>
                    </Link>{" "}
                    Martial Arts
                </h1>
            </div>

            <div className="right">
                <Link to="/">
                    <div className="home">
                        <h1>Home</h1>
                    </div>
                </Link>
                <Link to="/programs">
                    <div className="programs">
                        <h1>Programs</h1>
                    </div>
                </Link>
                <Link to="/about">
                    <div className="about">
                        <h1>About</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
