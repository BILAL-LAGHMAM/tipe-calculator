// SideBill.js
import { useEffect, useState } from "react";

function SideBill({ dataTocalc }) {
    const [bill, setBill] = useState(0);
    const [billError, setBillError] = useState(false);
    const [nbrPeople, setNbrPeople] = useState(0);
    const [nbrPeopleError, setNbrPeopleError] = useState(false);
    const [dataBill, setDataBill] = useState({});

    const SendToCalc = (e) => {
        setDataBill({
            bill: bill,
            nbrPeople: nbrPeople,
            tip: e.target.value,
        });
        if (nbrPeople === 0) {
            setNbrPeopleError(true)
        } else {
            setNbrPeopleError(false)
        }
        if (bill === 0) {
            setBillError(true)
        } else {
            setBillError(false)
        }
    };
    useEffect(() => {
        dataTocalc([dataBill]);
    }, [dataBill, dataTocalc]);

    return (
        <div className="SideBill">
            <article>
                <h1>Bill <span style={{ color: "red" }}>{billError ? "Can't Be Zero" : ""}</span></h1>
                <article className="inpBill">
                    <input type="text" onChange={(e) => setBill(e.target.value)} />
                </article>

            </article>
            <article>
                <h1>Select Tip %</h1>
                <article>
                    <button value={5} onClick={(e) => SendToCalc(e)}>
                        5%
                    </button>
                    <button value={10} onClick={(e) => SendToCalc(e)}>
                        10%
                    </button>
                    <button value={15} onClick={(e) => SendToCalc(e)}>
                        15%
                    </button>
                    <button value={25} onClick={(e) => SendToCalc(e)}>
                        25%
                    </button>
                    <button value={50} onClick={(e) => SendToCalc(e)}>
                        50%
                    </button>
                    <input onMouseLeave={(e) => e.target.value !== "" && SendToCalc(e)} placeholder="Custom" />
                </article>
            </article>
            <article>
                <h1>Number of People <span style={{ color: "red" }}>{nbrPeopleError ? "Can't Be Zero" : ""}</span></h1>
                <article className="inpBill">
                    <input type="text" onChange={(e) => setNbrPeople(e.target.value)} />
                </article>
            </article>
        </div>
    );
}

export default SideBill;
