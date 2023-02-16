import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Layout from './components/frame/frame'
import MainPage from './components/routes/mainpage'
import Rules from './components/routes/rules'
import Contact from './components/routes/contact'

function App() {


  return (
    <Router>
      <Routes>
          <Route path='/' element={<Layout />}>

            <Route index element={<MainPage />} />
            <Route path='rules' element={<Rules />} />
            <Route path='Contact' element={<Contact />} />
            <Route path='*' element={<h1>404 Error</h1>} />
            
          </Route>
      </Routes>
    </Router>
  )
}

export default App
