import { useEffect, useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';


function HistoryAll() {
const [machines, setMachines]:any = useState();

useEffect(() => {
    fetch(`https://63f4b8472213ed989c48f180.mockapi.io/machines`)
    .then((response) => response.json())
    .then((actualData) =>console.log(actualData[0].machine));
}, []);

return (
    <div className="App">
        <Header />
        
        <h1 className="d-flex align-items-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18.3334C14.6024 18.3334 18.3334 14.6024 18.3334 10C18.3334 5.39765 14.6024 1.66669 10 1.66669C5.39765 1.66669 1.66669 5.39765 1.66669 10C1.66669 14.6024 5.39765 18.3334 10 18.3334Z" stroke="#262626" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 5V10L13.3333 11.6667" stroke="#262626" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Kompletní historie závad
        </h1>
        
        <Footer />
    </div>
	)
}

export default HistoryAll
