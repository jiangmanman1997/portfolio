import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'

/** 应用入口：路由 + 全局导航栏。 */
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
