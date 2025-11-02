
import './App.css'
import { Route, Routes } from 'react-router'
import DetailBrainrot from './pages/detail-brainrot.page'
import Home from './pages/home.page'
import MainLayout from './layouts/main-layout'
import StatsPage from './pages/stats.page'
import NotFound from './pages/not-found'

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='brainrot/:idBrainrot' element={<DetailBrainrot/>}/>
          <Route path='stats/' element={<StatsPage/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
