import React, { useState } from "react";
import "../CSS/CurrencyConverter.css";

const CurrencyConverter = () => {
  const [value, setValue] = useState("0");
  const [sign, setSign] = useState("");

  const convert = () => {
    let amount = document.getElementById("amount").value;
    if(amount === ''){
        alert('please enter amount first !!!')
    }
    else{



        let select_first = document.getElementById("select_first").value;
        let select_second = document.getElementById("select_second").value;
    
        
    
        if (select_first === "inr") {
            if (select_second === "usd") {
                let val = (amount / 79.59).toFixed(3);
    
                setValue(val);
                setSign("$");
            }
            else if (select_second === "inr") {
                let val = amount
    
                setValue(val);
                setSign("inr");
            }
             else if (select_second === "kwd") {
                let val = (amount * 0.0039).toFixed(3);
    
                setValue(val);
                setSign("kwd");
            }
             else if (select_second === "euro") {
                let val = (amount * 0.012).toFixed(3);
    
                setValue(val);
                setSign("€");
            }
        } 
        else if (select_first === "kwd") {
            if (select_second === "inr") {
                let val = (amount / 0.0039).toFixed(3);
    
                setValue(val);
                setSign("₹");
    
            } 
            else if (select_second === "usd")
             {
                let val = (amount*3.26).toFixed(3);
    
                setValue(val);
                setSign("$");
            } 
            else if (select_second === "kwd")
            {
               let val = amount
    
               setValue(val);
               setSign("kwd");
           } 
            else if (select_second === "euro") {
                let val = (amount * 3.20).toFixed(3);
    
                setValue(val);
                setSign("euro");
            }
        }
    
        else if (select_first === "usd") {
            if (select_second === "inr") {
                let val = (amount * 79.59).toFixed(3);
    
                setValue(val);
                setSign("inr");
    
            }
             else if (select_second === "kwd") 
             {
                let val = (amount / 3.26).toFixed(3);
    
                setValue(val);
                setSign("kwd");
            } 
            else if (select_second === "usd") 
             {
                let val = amount
    
                setValue(val);
                setSign("usd");
            } 
            else if (select_second === "euro") 
            {
                let val = (amount * 0.98).toFixed(3);
    
                setValue(val);
                setSign("euro");
            }
        } 
    
    
        else if (select_first === "euro") {
            if (select_second === "inr") {
                let val = (amount *81.10).toFixed(3);
    
                setValue(val);
                setSign("inr");
    
            } 
            else if (select_second === "kwd") {
                let val = (amount * 0.31).toFixed(3);
    
                setValue(val);
                setSign("kwd");
            }
            else if (select_second === "euro") {
                let val = amount
    
                setValue(val);
                setSign("euro");
            }
             else if (select_second === "usd") {
                let val = (amount *1.02).toFixed(3);
    
                setValue(val);
                setSign("$");
            }
        }


    }

  };

  return (
    <>
      <div className="main">
        <h2>:CURRENCY CONVERTER:</h2>

        <label>Enter Amount:</label>
        <br></br>
        <input type="number" id="amount" />
        <br></br>
        <br></br>
        <label>FROM : </label>
        <br></br>
        <select id="select_first" required>
          <option value="inr">INR</option>
          <option value="kwd">KWD</option>
          <option value="usd">USD</option>
          <option value="euro">EURO</option>
        </select>

        <br></br>
        <br></br>
        <label>TO : </label>
        <br></br>
        <select id="select_second" re>
          <option value="usd">USD</option>
          <option value="inr">INR</option>
          <option value="kwd">KWD</option>
          <option value="euro">EURO</option>
        </select>

        <br></br>
        <br></br>

        <button onClick={convert}>convert</button>

        <h2 id="result">:RESULT:</h2>
        <p id="disp">{`${value} ${sign}`}</p>
      </div>
    </>
  );
};

export default CurrencyConverter;
