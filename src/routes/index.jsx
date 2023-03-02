import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Allpages } from '../pages/all'
import { AllProjectsPage } from '../pages/allProjects'
// import { Home } from '../pages/home'


export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" exact element={<Allpages />} />
        <Route path="/" exact element={<Allpages />} />
        <Route path="/home" exact element={<Allpages />} />
        <Route path="/projects" exact element={<AllProjectsPage />} />
      </Routes>
    </Router>
  )
}
