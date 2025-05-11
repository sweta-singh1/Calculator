import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [data, setData] = useState("");

  const getValue = (event) => {
    setData(data.concat(event.target.value));
  };

  const calculation = () => {
    try {
      setData(eval(data).toString());
    } catch {
      setData("Error");
    }
  };

  const back = () => {
    setData(data.slice(0, -1));
  };

  const clear = () => {
    setData("");
  };

  return (
    <div className="box-container">
      <div className="container">
        <input type="text" value={data} placeholder="0" readOnly />

        <div className="btn-container">
          <button onClick={getValue} value="(">
            (
          </button>
          <button onClick={getValue} value=")">
            )
          </button>
          <button onClick={getValue} value="%">
            %
          </button>
          <button onClick={clear} value="AC">
            AC
          </button>

          <button onClick={getValue} value="9">
            9
          </button>
          <button onClick={getValue} value="8">
            8
          </button>
          <button onClick={getValue} value="7">
            7
          </button>
          <button onClick={getValue} value="/">
            /
          </button>

          <button onClick={getValue} value="6">
            6
          </button>
          <button onClick={getValue} value="5">
            5
          </button>
          <button onClick={getValue} value="4">
            4
          </button>
          <button onClick={getValue} value="*">
            *
          </button>

          <button onClick={getValue} value="3">
            3
          </button>
          <button onClick={getValue} value="2">
            2
          </button>
          <button onClick={getValue} value="1">
            1
          </button>
          <button onClick={getValue} value="-">
            -
          </button>

          <button onClick={getValue} value="0">
            0
          </button>
          <button onClick={back}>⌫</button>
          <button onClick={calculation}>=</button>
          <button onClick={getValue} value="+">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
