import "./MartialArts.scss";
import shaolin from "../../helpers/shaolin.jpg";
import { Link } from "react-router-dom";

const Shaolin = () => {
    return (
        <div className="ma">
            <img src={shaolin} alt="Shaolin" />
            <h1>少林</h1>
            <p>
                Kung Fu (功夫) is a form of exercise, a means of self-defense and an exchange of
                culture. It is also known as Gōng Fù (功夫), Wŭ Shù (武术) or Guó Shù (國術). It has
                similarities to the more recognized styles of Karate, as Kung Fu uses hand as well
                as foot techniques, yet Kung Fu is one of, if not the oldest, Martial Art.
                Idiomatically, Kung Fu means “energy and time”. The words “Wŭ Shù” (武术) actually
                mean Martial Art. In America, we have taken the expression “Kung Fu” and have
                popularized it to the point where it has become the common name for the Chinese
                systems of martial arts. The name “Wu Shu” has been and is still used for a more
                contemporary, performance oriented system of movements, the practice of which is
                often sponsored by the Chinese government. There are many systems of Kung Fu, the
                most popular of which have their origins in the Shaolin Temple. However, Kung Fu
                existed in China long before the first Temple was built.
            </p>
            <Link to="/">
                <button>Return Home</button>
            </Link>
        </div>
    );
};

export default Shaolin;
