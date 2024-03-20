
import './App.css'
import Footer from './components/Footer'
import Maneger from './components/Maneger'
import Navbar from './components/Navbar'
import  { Toaster } from 'react-hot-toast';
import {BrowserRouter as Router , Routes, Route } from  "react-router-dom"
import Feedback from './pages/Feedback';
import Notfound from './pages/Notfound';
import ShowFeedBack from './pages/ShowFeedBack';



function App() {


  return (
    <>
    <Router>
    <Toaster/>
  <Navbar/>

      <Routes>
 <Route path='/' element={<Maneger/>}/>
 <Route path='/feedback' element={<Feedback/>}/>
 <Route path='/showfeedback' element={<ShowFeedBack/>}/>
 <Route path='*' element={<Notfound/>}/>


      </Routes>
    </Router>

  
  <Footer/>
    </>
  )
}

export default App
