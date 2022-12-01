
import './App.css';
import React from 'react';
import CV from './CV' 
import UserForm from './UserForm'
import Cards from './CardSection'
const husuCvData = [
  {
    title: "Hobby",
    list: ["Talking", "Nard ", "Domino"]
  },
  {
    title: "Experiance ",
    list: ["Experiance1", "Experiance 2", "Experiance2"]
  },
  {
    title: "Education",
    list: ["AZII ", "Lisey  ", "Alqoritmika- Code for future"]
  } 
] 

function App() {
  return (
    <div className="App"> 
      {/* <CV data={husuCvData} /> */}
      {/* <UserForm/> */}

      <Cards/>
    </div>
  );
}

export default App;
