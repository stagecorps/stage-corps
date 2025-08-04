import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Team } from './pages'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import './main.css'

import Header from './components/Header'
import Footer from './components/Footer'

AOS.init({
  duration: 600,
  easing: 'ease-in-out',
  once: true,
  mirror: false
})

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/team' element={<Team />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
