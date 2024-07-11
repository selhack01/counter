import { useState } from "react";
import useStyles from "./resultstyles";

const Counter = () => {

    const style = useStyles();
    var [result , setResult] = useState(0);

    function arttir() {
        result = setResult(result + 1);
    }

    function sifirla() {
        result = setResult(0);
    }

    function azalt() {
        result = setResult(result - 1);
    }

    return(
        <div className={style.container}>
        <div className={style.title}>Counter App</div>
        <span className={style.span}>{result}</span>
        <div className={style.buttonContainer}>
        <button className={style.button} onClick={arttir}>+</button>     
        <button className={style.button} onClick={sifirla}>0</button>
        <button className={style.button} onClick={azalt}>-</button>
        </div>
        </div>
    );

}

export default Counter;