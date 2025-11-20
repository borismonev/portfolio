import './css/App.css';
import Home from './pages/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTop from './utility/ScrollToTop';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <ScrollToTop />
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
