import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home'
import { ProjectsPage } from '../pages/Projects'



export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" exact element={<Home />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/projects" exact element={<ProjectsPage />} />
      </Routes>
    </Router>
  )
}
