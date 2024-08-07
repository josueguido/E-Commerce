import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LogIn from './Pages/LogIn'
import Layout from './Components/Layouts'
import NoEncontrado from './Pages/NotFound'
import SignUp from './Pages/SignUp'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />} />
                <Route path='/LogIn' element={<LogIn />} />
                <Route path='/SignUp' element={<SignUp />} />
                <Route path='/About' element={<About />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='*' element={<NoEncontrado />} />
            </Routes>
        </Router>

    )
}

export default App
