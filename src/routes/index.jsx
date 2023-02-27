import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Allpages } from '../pages/all'
// import { Home } from '../pages/home'


export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" exact element={<Allpages />} />
        <Route path="/" exact element={<Allpages />} />
        <Route path="/home" exact element={<Allpages />} />
      </Routes>
    </Router>
  )
}
