import Header from './Components/Header'
import Footer from './Components/Footer'
import ReportModal from './Components/ReportModal'
import Card from './Components/Card'
import './styles/styles.scss';
import './styles/card.scss'
import { useEffect, useState } from 'react';


function App() {
const [machines, setMachines]:any = useState();

useEffect(() => {
  fetch(`https://63f4b8472213ed989c48f180.mockapi.io/machines`)
  .then((response) => response.json())
  .then((actualData) => setMachines(Object.keys(actualData[0])));
}, []);

console.log(machines);

const showModal = () => {
  console.log('clicked');
}

return (
    <div className="App">
      <Header />
      <div className="cards-wrapper">
        {
          machines && machines.map((machine:any) => {
            return <div className="card" onClick={() => showModal()}>
                    <div className="card__title">
                    {machine}                    
                    </div>
                    </div>
          })
        }
      </div>
      <Footer />
      <ReportModal />
    </div>
  )
}

export default App
