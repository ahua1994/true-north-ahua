import "./Purpose.scss";

const Purpose = () => {
    return (
        <div className="Purpose">
            <div className="question">What do you want to Achieve?</div>
            <div className="purpose">
                <input type="text" placeholder="State Your Worldly Desire"></input>
                <button>Enlighten Me</button>
            </div>
        </div>
    );
};

export default Purpose;
