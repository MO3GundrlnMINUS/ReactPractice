import styles from './App.module.scss'
import { About } from './pages/About/About'
import { Blogs } from './pages/Blogs/Blogs'
import { Contact } from './pages/Contact/Contact'
import { Resume } from './pages/Resume/Resume'
import { Works } from './pages/Works/Works'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/works' element={<Works />} />
      </Routes>
  )
}

export default App
