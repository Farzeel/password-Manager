
import './App.css'
import Footer from './components/Footer'
import Maneger from './components/Maneger'
import Navbar from './components/Navbar'
import  { Toaster } from 'react-hot-toast';

function App() {


  return (
    <>
    <Toaster/>
  <Navbar/>
  <Maneger/>
  <Footer/>
    </>
  )
}

export default App
