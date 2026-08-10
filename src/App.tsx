import { Navigate, Route, Routes } from 'react-router-dom'
import CoverPage from './pages/CoverPage'
import HomePage from './pages/HomePage'
import CursorGlow from './components/CursorGlow'

export default function App() {
  return (
    <>
      <CursorGlow />
      <Routes>
        <Route path="/" element={<Navigate to="/shais-18th" replace />} />
        <Route path="/shais-18th" element={<CoverPage />} />
        <Route path="/shais-18th-home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/shais-18th" replace />} />
      </Routes>
    </>
  )
}
