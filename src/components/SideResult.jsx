// SideResult.js
import { useEffect, useState } from "react";

function SideResult(props) {
    const [tipAmount, setTipAmount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calcTipAmount = props.bill.map((val) => Number(val.bill) * (val.tip / 100));
        const calcTotal = props.bill.map((val) => (Number(val.bill) + calcTipAmount) / Number(val.nbrPeople));
        setTipAmount(isNaN(calcTipAmount) ? 0 : calcTipAmount);
        setTotal(isNaN(calcTotal) ? 0 : calcTotal);
    }, [props.bill]);
    return (
        <div className="SideResult">
            <article>
                <p>Tip Amount <br /> <span>/ person</span></p>
                <p>{tipAmount}$</p>
            </article>
            <article>
                <p>Total <br /> <span>/ person</span></p>
                <p>{total}$</p>
            </article>
            <article>
                <button>RESET</button>
            </article>
        </div>
    );
}

export default SideResult;