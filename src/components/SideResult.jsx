// SideResult.js
import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState } from "react";

function SideResult(props) {
    const [tipAmount, setTipAmount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calcTipAmount = props.bill.map((val) => val.nbrPeople > 0 && Number(val.bill) * (val.tip / 100));
        const calcTotal = props.bill.map((val) => val.nbrPeople > 0 && (Number(val.bill) + calcTipAmount) / Number(val.nbrPeople));
        setTipAmount(isNaN(calcTipAmount) ? 0 : calcTipAmount);
        setTotal(isNaN(calcTotal) ? 0 : calcTotal);
    }, [props.bill]);
    const reset = () => {
        setTipAmount(0);
        setTotal(0)
    }
    return (
        <div className="SideResult">
            <article>
                <p>Tip Amount <br /> <span>/ person</span></p>
                <p>{tipAmount[0] ? tipAmount[0].toFixed(2) : "0.00"}$</p>
            </article>
            <article>
                <p>Total <br /> <span>/ person</span></p>
                <p>{total[0] ? total[0].toFixed(2) : "0.00"}$</p>
            </article>
            <article>
                <button style={{ backgroundColor: total === 0 && "hsla(172, 67%, 45%, 0.447)" }} onClick={reset}>RESET</button>
            </article>
        </div>
    );
}

export default SideResult;
