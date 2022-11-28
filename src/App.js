
import './App.css';
import CV from './CV'

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
      <CV data={husuCvData} />
    </div>
  );
}

export default App;
