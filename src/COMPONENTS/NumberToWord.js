import React, { useState } from 'react'

const NumberToWord = () => {
   
     const[word,setWord] = useState('');
     const arr = ['one','two','three','four','five','six','seven','eight','nine','ten']
     let x =''
     const convertIntoword = (event)=>{
      
        let val = event.target.value;
         arr.indexOf(val)
        

     }

  return (
    <>
      <div className='contain'>
            <div>
                <label>Enter Number :</label> <br></br>
                <input type='number' id='inp-1' onChange={convertIntoword}/>
            </div>

            <div>
                <p>Converted into words:- {}</p>
            </div>
      </div>
    </>
  )
}

export default NumberToWord
