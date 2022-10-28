import "./Programs.scss";
import Purpose from "../../components/Purpose/Purpose";
import { Link } from "react-router-dom";

const Programs = () => {
    return (
        <div className="Programs">
            <Purpose></Purpose>
            <div className="main">
                <div className="left">
                    <h2>Our Programs</h2>
                    <Link to="/muaythai">
                        <div className="muaythai">
                            <h2>Muay Thai มวยไทย</h2>
                            <p>
                                Muay Thai, which translates to “Thai Boxing”, is the national sport
                                of Thailand.
                            </p>
                            <p> Pricing: $5 per month</p>
                        </div>
                    </Link>
                    <Link to="/shaolin">
                        <div className="shaolin">
                            <h2>Shaolin 少林</h2>
                            <p>
                                Shaolin Kungfu trains us to be mentally focused, and enables us to
                                expand our mind.
                            </p>
                            <p> Pricing: $5 per month</p>
                        </div>
                    </Link>
                    <Link to="/taichi">
                        <div className="taichi">
                            <h2>Taichi 太极</h2>
                            <p>
                                Tai Chi is a moving meditation in the form of a series of gentle
                                exercises that create harmony between the mind and body.
                            </p>
                            <p> Pricing: $5 per month</p>
                        </div>
                    </Link>
                </div>
                <div className="right">
                    <h2>Speak to a Master</h2>
                    <label htmlFor="name">Name</label>
                    <input placeholder="name" id="name" type="text" />
                    <label htmlFor="email">Email</label>
                    <input placeholder="email" id="email" type="email" />
                    <label htmlFor="">Message</label>
                    <textarea
                        placeholder="Message"
                        name="message"
                        id="message"
                        cols="30"
                        rows="4"
                    ></textarea>
                    <button>Inquire</button>
                </div>
            </div>
        </div>
    );
};

export default Programs;
