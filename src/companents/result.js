import { useState } from "react";
import useStyles from "./resultstyles";

const Counter = () => {

    const style = useStyles();
    var [result , setResult] = useState(0);
    var [Value, setValue] = useState(1);
    
    function handleInputChange(e) {
        setValue(Number(e.target.value));
    }

    function arttir() {
        result = setResult(result + Value);
    }

    function sifirla() {
        result = setResult(0);
    }

    function azalt() {
        result = setResult(result - Value);
    }

    return(
        <div className={style.container}>
        <div className={style.title}>Counter App</div>
        <span className={style.span}>{result}</span>
        <input      className={style.input}
                    type="number" 
                    value={Value} 
                    onChange={handleInputChange}
                />
        <div className={style.buttonContainer}>
        <button className={style.button} onClick={arttir}>+</button>     
        <button className={style.button} onClick={sifirla}>0</button>
        <button className={style.button} onClick={azalt}>-</button>
        </div>
        </div>
    );

}

export default Counter;