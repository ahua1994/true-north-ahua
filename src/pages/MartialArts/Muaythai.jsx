import "./MartialArts.scss";
import muaythai from "../../helpers/muaythai.jpg";
import { Link } from "react-router-dom";

const Muaythai = () => {
    return (
        <div className="ma">
            <img src={muaythai} alt="Muay Thai" />
            <h1>มวยไทย</h1>
            <p>
                “Muay” translates to mean “boxing” in Thai, so Muay Thai is literally Thai boxing.
                Taking elements from Muay Boran, the traditional Thai martial arts, Muay Thai as a
                modern combat sport was first formalized in the early 20th century. The sport was
                influenced by British boxing where codified rules and the boxing ring were put in
                place. During this period, fighters also ditched wrapping hands with ropes (“Kard
                Chuek”) and began wearing boxing gloves in competitions. Muay Thai is a stand-up
                striking sport, with two competitors in the ring throwing punches, elbows, knees and
                kicks at each other. Clinching, sweeps and throws are also allowed. Besides the
                8-point contact, a key difference between Muay Thai and many other stand-up combat
                sports is its emphasis on traditional elements such as the pre-fight dance ritual
                known as Wai Kru Ram Muay, the head dress (Mongkon) and the Sarama music that
                accompanies each fight.
            </p>
            <Link to="/">
                <button>Return Home</button>
            </Link>
        </div>
    );
};

export default Muaythai;
