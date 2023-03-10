import { useEffect, useState } from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import ReportModal from './Components/ReportModal'
import Card from './Components/Card'
import './styles/styles.scss';
import './styles/card.scss'


function App() {
const [machines, setMachines]:any = useState();
const [isModal, setModal] = useState({visibility: '', modalTitle: ''});

useEffect(() => {
  fetch(`https://63f4b8472213ed989c48f180.mockapi.io/machines`)
  .then((response) => response.json())
  .then((actualData) => setMachines(Object.keys(actualData[0])));
}, []);

const setModalData = (machine:any) => {
  setModal({
    visibility: 'visible',
    modalTitle: machine
  });
  
}

return (
    <div className="App">
      <Header />
      <div className="cards-wrapper">
        {
          machines && machines.map((machine:string) => {
            return <div className="card-item" onClick={() => setModalData(machine)}>
                      <Card machineName={machine} />
                    </div>
          })
        }
      </div>
      <Footer />
      <ReportModal modalVisibility={isModal.visibility} modalTitle={isModal.modalTitle}/>
    </div>
  )
}

export default App
