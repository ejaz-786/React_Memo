import React from 'react'
// import { useState } from 'react';
import '../CSS/NumberToWord.css'


   


const NumberToWord = () => {

   
    const ones = ['','one','two','three','four','five','six','seven','eight','nine','ten',
              'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const tens = ['', '','twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety'];
    const hundered = ['','hundereds'];
    const thousand = ['thousands'];
    const lakh = ['lakhs'];


    const convertIntoword = (event)=>{
     
       let val = event.target.value;
       if(val !== ''){
         
          if(val <20){

            // console.log(ones[val]);
            document.getElementById('pid').innerHTML = ones[val];

          }
          if(val < 100 && val >= 20){

            let first_digit = Math.trunc(val/10);
            let second_digit = val%10;

            // console.log(first_digit);
            // console.log(second_digit);
            
            // console.log(tens[first_digit]+' '+ones[second_digit]);
            document.getElementById('pid').innerHTML = tens[first_digit]+' '+ones[second_digit]
            
     
          }

          if(val >=100 && val<1000){

                // let first_digit = Math.trunc(val/10);
                // let second_digit = val%10;
    
                let digits = '';
                let digit;
                while(val>0){
                    digit = val%10;
                    digits += digit;
                
                    val =  Math.trunc(val/10);
                    
                }

            let first_digit = digits[2];
            let second_digit = digits[1];
            let third_digit = digits[0];

            //    console.log(first_digit);
            //    console.log(second_digit);
            //    console.log(third_digit);

            //  console.log(ones[first_digit]+" hundered "+tens[second_digit]+" "+ones[third_digit]);
             document.getElementById('pid').innerHTML  = ones[first_digit]+" hundered "+tens[second_digit]+" "+ones[third_digit]

          }

          if(val >=1000 && val<100000){

           let digits = val.toString();

           if(digits.length === 4){

            let first_digit = digits[0];
            let second_digit = digits[1];
            let third_digit = digits[2];
            let fourth_digit = digits[3]

              if(second_digit === '0' || third_digit === '0'){
                // console.log(ones[first_digit]+" thousands "+ones[second_digit]+" "+tens[third_digit]+" "+ones[fourth_digit]);

                document.getElementById('pid').innerHTML = ones[first_digit]+" thousands "+ones[second_digit]+" "+tens[third_digit]+" "+ones[fourth_digit]

              }
              else{
                // console.log(ones[first_digit]+" thousands "+ones[second_digit]+" hundered "+tens[third_digit]+" "+ones[fourth_digit]);


                document.getElementById('pid').innerHTML = ones[first_digit]+" thousands "+ones[second_digit]+" hundered "+tens[third_digit]+" "+ones[fourth_digit]
              }
           
             
           }

           if(digits.length === 5){

            let first_two_dg = parseInt(digits.substr(0, 2));

            let first_digit = digits[0];
            let second_digit = digits[1];
      
            let third_digit = digits[2];
            let fourth_digit = digits[3]
            let fifth_digit = digits[4]

            //  console.log(typeof(first_two_dg));
             if(first_two_dg<20){

                if(third_digit === '0' || fourth_digit === '0'){

                    // console.log(ones[first_two_dg] +' thousand '+ones[third_digit]+' '+ tens[fourth_digit]+" "+ones[fifth_digit] );

                    document.getElementById('pid').innerHTML = ones[first_two_dg] +' thousand '+ones[third_digit]+' '+ tens[fourth_digit]+" "+ones[fifth_digit]

                }
                else{ 
                    // console.log(ones[first_two_dg] +' thousand '+ones[third_digit]+' hundered '+ tens[fourth_digit]+" "+ones[fifth_digit] );


                    document.getElementById('pid').innerHTML = ones[first_two_dg] +' thousand '+ones[third_digit]+' hundered '+ tens[fourth_digit]+" "+ones[fifth_digit] 
                }
              
             }
             else{
                if(third_digit === '0' || fourth_digit === '0'){
                    // console.log(tens[first_digit]+ones[second_digit]+"thousand"+ones[third_digit]+' '+tens[fourth_digit]+ones[fifth_digit]);

                    document.getElementById('pid').innerHTML  = tens[first_digit]+ones[second_digit]+"thousand"+ones[third_digit]+' '+tens[fourth_digit]+ones[fifth_digit]
                }
                else{
                    // console.log(tens[first_digit]+ones[second_digit]+" thousand "+ones[third_digit]+' hundered '+tens[fourth_digit]+" "+ones[fifth_digit]);

                    document.getElementById('pid').innerHTML = tens[first_digit]+ones[second_digit]+" thousand "+ones[third_digit]+' hundered '+tens[fourth_digit]+" "+ones[fifth_digit]
                }
            
             }

            // console.log(ones[first_two_dg]);

           }


          }

       }
       else{
        document.getElementById('pid').innerHTML = '';
       }
  
     }
    


  return (
    <>
    <div className='contain'>
    <div>
        <label>Enter Number :</label> <br></br>
        <input type='number' id='inp-1' onChange={convertIntoword}/>
    </div>

    <div>
        <p>Converted into words:- </p>
        <p id='pid'></p>
    </div>
   </div>

   </>
  )
}

export default NumberToWord
