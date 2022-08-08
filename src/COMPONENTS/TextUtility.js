import React, { useState } from 'react'
import '../CSS/TextUtility.css'

const TextUtility = () => {

    const[char, setChar] = useState('0');
    const[word,setWord] = useState('0')
 
   
  const uppercase = ()=>{
     let val = document.getElementById('area').value;
     if(val === ''){
        alert('please write something in the box');
     }
     else{
      let vals = val.toUpperCase();
      document.getElementById('area').value = vals;
     }

  }

  const lowercase = ()=>{
    let val = document.getElementById('area').value
    if(val === ''){
      alert("please write something");
    }
    else{
      let vals = val.toLowerCase();
      document.getElementById('area').value = vals;
    }

  }
  const count_word = ()=>{

    let val = document.getElementById('area').value;
    if(val === ''){
      alert('please write something...');
    }
    else{
     let x = val.split(' ').filter((val)=>{
        // document.getElementById('pid').innerHTML = val.length;
         return val;
      })

      setWord(x.length)
    }

  }

  const count_char = ()=>{
    let val = document.getElementById('area').value;
    if(val === ''){
      alert('please write something...');
    }
    else{
      let x = 0;
      val.split(' ').map((val)=>{
          x += val.length;
      })

      // document.getElementById('pid').innerHTML = x;
      setChar(x);
    }

  }
  



  return (
    <>

    <div className='container'>
         <h3 style={{marginTop:"5px"}}>TEXT UTILITY APP </h3>
        <p>Analyze the text what you have written. !!</p>
        <textarea id='area'/>  <br></br>
         <div className='btns' style={{marginTop:"25px"}}>
            <button onClick={uppercase}>UPPERCASE</button>
            <button onClick={lowercase}>LOWERCASE</button>
            <button onClick={count_word}>COUNT WORD</button>
            <button onClick={count_char}>COUNT CHARACTERS</button> 
         </div>
          <br></br>
         <p>{`${char} characters and ${word} words.`}</p>

    </div>

  
      
    </>
  )
}

export default TextUtility
