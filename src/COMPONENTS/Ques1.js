import React from 'react'
import { useContext } from 'react'
import { usercontext } from '../App'

const Ques1 = () => {
    const username_from_app = useContext(usercontext)

  
        const change_username = () => {
            username_from_app.setUsername('hello ejaz')
             
          }
    


  return (
    <>
      <h1>this is component ques 1.js</h1>
      <h2>{`this is my userName: ${username_from_app.username}`}</h2>

      <button onClick={change_username}>click me</button>
    </>
  )
}

export default Ques1
