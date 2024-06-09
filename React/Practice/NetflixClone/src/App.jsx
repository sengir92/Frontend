import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Row from './components/Row/Row';
import requests from './API/requests';

function App() {


  return (
    <>
      <Navbar/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} id="NO"/>
    </>
  )
}

export default App
