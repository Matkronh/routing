import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Layout from './components/frame'
import MainPage from './components/mainpage'
import Rules from './components/rules'
import Contact from './components/contact'

function App() {


  return (
    <Router>
      <Routes>
          <Route path='/' element={<Layout />}>

            <Route index element={<MainPage />} />
            <Route path='rules' element={<Rules />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<h1>404 Error</h1>} />
            
          </Route>
      </Routes>
    </Router>
  )
}

export default App
