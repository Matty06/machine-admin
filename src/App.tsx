import Header from './Components/Header'
import Footer from './Components/Footer'
import Card from './Components/Card'
import './styles/styles.scss';

function App() {

return (
    <div className="App">
      <Header />
      <div className="cards-wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  )
}

export default App
