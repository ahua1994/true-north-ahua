import Purpose from "../../components/Purpose/Purpose";
import muaythai from "../../helpers/muaythai.jpg";
import shaolin from "../../helpers/shaolin.jpg";
import taichi from "../../helpers/taichi.jpg";
import { Link } from "react-router-dom";
import "./Home.scss";
const Home = () => {
    return (
        <div className="Home">
            <div className="banner">
                <h1>
                    <span>Body,</span> Mind and Spirit
                </h1>
                <h5>
                    <span>Let us join you,</span> on your endless journey to improvement.
                </h5>
            </div>
            <Purpose></Purpose>
            <div className="martial-arts">
                <div className="muaythai">
                    <Link to="/muaythai">
                        <img src={muaythai} alt="Muay Thai" />
                        <p>
                            Muay Thai, which translates to “Thai Boxing”, is the national sport of
                            Thailand.
                        </p>
                        <h1>มวยไทย</h1>
                    </Link>
                </div>
                <div className="shaolin">
                    <Link to="/shaolin">
                        <img src={shaolin} alt="Shaolin" />
                        <p>
                            Shaolin Kungfu trains us to be mentally focused, and enables us to
                            expand our mind.
                        </p>
                        <h1>少林</h1>
                    </Link>
                </div>
                <div className="taichi">
                    <Link to="/taichi">
                        <img src={taichi} alt="Taichi" />
                        <p>
                            Tai Chi is a moving meditation in the form of a series of gentle
                            exercises that create harmony between the mind and body.
                        </p>
                        <h1>太极</h1>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
