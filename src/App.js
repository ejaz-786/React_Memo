
import './App.css';
import { createContext, useState } from 'react';
// import Ques1 from './COMPONENTS/Ques1';
// import ParentComponent from './COMPONENTS/ParentComponent';
// import CurrencyConverter from './COMPONENTS/CurrencyConverter';
// import TextUtility from './COMPONENTS/TextUtility';
import NumberToWord from './COMPONENTS/NumberToWord';

const usercontext = createContext()

function App() {

  const[username, setUsername] = useState('ejaz-cedcoss')



  return (
    <div className="App">

      <usercontext.Provider value={{
        username: username,
        setUsername: setUsername,
        }}>
        {/* <h1>{`this is my username:${username}`}</h1> */}
        {/* <Ques1  /> */}
        
      </usercontext.Provider>



      {/* <ParentComponent/> */}

      {/* <CurrencyConverter/> */}

      {/* <TextUtility/> */}
      <NumberToWord/>

    </div>
  );
}

export default App;


export  {usercontext}