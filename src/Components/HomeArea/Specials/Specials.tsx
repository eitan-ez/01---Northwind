import "./Specials.css";

function Specials(): JSX.Element {

    function isWeekend(): boolean {
        const now = new Date();
        const dayOfWeek = now.getDay() + 1; // 1 = Sunday, 2 = Monday...
        return dayOfWeek >= 6;
    }

    return (
        <div className="Specials Box">
            <p>

                Our Specials: 
                {isWeekend() ? <span>Pizza</span> : <span>Pasta</span>}

                <span> | </span>

                {isWeekend() && <span>Fish & Chips</span>}

            </p>
        </div>
    );
}


export default Specials;
