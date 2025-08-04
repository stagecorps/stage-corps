import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Team, Testimonials, Services } from './pages'

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
        <Route index element={<Home />} />
        <Route path='/team' element={<Team />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/services/light-design' element={<Services serviceKey="Light Design" />} />
        <Route path='/services/scenic-design' element={<Services serviceKey="Scenic Design" />} />
        <Route path='/services/labor' element={<Services serviceKey="Labor"/>} />
        <Route path='/services/rentals' element={<Services serviceKey="Rentals"/>} />
        <Route path='/services/sales' element={<Services serviceKey="Sales"/>} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
