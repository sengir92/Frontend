import {useState,useContext,useEffect } from 'react'
import './App.css'
import Parag from './components/Parag'
import HarcaListe from './components/HarcaListe'
import HarcaEkle from './components/HarcaEkle'
import GeneralContext from './context/GeneralContext'


function App() {
const {harca, userName,setUserName} = useContext(GeneralContext);
const [userInput,setUserInput] = useState("");
let tutar = 0;
harca.forEach(item => {
  tutar += parseInt(item.amount);
});

const handleUserNameUpdate = () => {
  setUserName(userInput);
  window.localStorage.setItem("userName", userInput); 
};

useEffect (() => {
  const userName = window.localStorage.getItem("userName");
  if(userName) {
    setUserName(userName);
  }
}, [setUserName]);




const handleDeleteUser = () => {
  setUserName("");
  window.localStorage.removeItem("userName");
}

if(userName === "") {
  return (
  <div>
     <h1>Lütfen kullanıcı adı giriniz</h1>
     <input type="text" placeholder='İsminizi Giriniz' onChange={(e) => setUserInput(e.target.value)} value={userInput} />
     <button onClick={handleUserNameUpdate}>Hayırlı olsun</button>
  </div>
  )
}



  return (
        <div className='app'>
        <h1>Merhaba {userName} </h1>
        <Parag title = "React Harcama Takip Uygulamasına hoşgeldiniz" />
        <h3>Tutar : {tutar} TL</h3>
        <HarcaListe/>
        <HarcaEkle/>  
        <button onClick={handleDeleteUser}>Kullanıcı Sil</button>
      </div>
      
  )
}

export default App
