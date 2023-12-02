// Calc.js
import { useState } from "react";
import SideBill from "./SideBill";
import SideResult from "./SideResult";

function Calc() {
    const [billValue, setBillValue] = useState([]);
    return (
        <div className="calc">
            <SideBill dataTocalc={setBillValue} />
            <SideResult bill={billValue} />
        </div>
    );
}

export default Calc;
