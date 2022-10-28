import "./MartialArts.scss";
import taichi from "../../helpers/taichi.jpg";
import { Link } from "react-router-dom";

const Taichi = () => {
    return (
        <div className="ma">
            <img src={taichi} alt="Taichi" />
            <h1>太极</h1>
            <p>
                Tai chi is often described as "meditation in motion," but it might well be called
                "medication in motion." There is growing evidence that this mind-body practice,
                which originated in China as a martial art, has value in treating or preventing many
                health problems. And you can get started even if you aren't in top shape or the best
                of health. In this low-impact, slow-motion exercise, you go without pausing through
                a series of motions named for animal actions — for example, "white crane spreads its
                wings" — or martial arts moves, such as "box both ears." As you move, you breathe
                deeply and naturally, focusing your attention — as in some kinds of meditation — on
                your bodily sensations. Tai chi differs from other types of exercise in several
                respects. The movements are usually circular and never forced, the muscles are
                relaxed rather than tensed, the joints are not fully extended or bent, and
                connective tissues are not stretched. Tai chi can be easily adapted for anyone, from
                the most fit to people confined to wheelchairs or recovering from surgery.
            </p>
            <Link to="/">
                <button>Return Home</button>
            </Link>
        </div>
    );
};

export default Taichi;
