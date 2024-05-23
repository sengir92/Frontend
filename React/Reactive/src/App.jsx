
import './App.css'
import CustomContainer from './components/container/Container'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Classes from './components/classes/Classes'
import BmiCalculator from './components/bmi/BmiCalculator'
import Trainer from './components/trainer/Trainer'
import PurchaseForm from './components/purchase-form/PurchaseForm'
import Review from './components/review/Review'
import ContactUs from './components/contact-us/ContactUs'
import Footer from './components/footer/Footer'

function App() {
  

  return (
    <>
      <CustomContainer/>
      <Header/>
      <Home/>
      <Classes/>
      <BmiCalculator/>
      <Trainer/>
      <PurchaseForm/>
      <Review/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default App
