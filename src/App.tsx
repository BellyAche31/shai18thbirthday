import { Navigate, Route, Routes } from 'react-router-dom'
import CoverPage from './pages/CoverPage'
import HomePage from './pages/HomePage'
import CursorGlow from './components/CursorGlow'
import MusicPlayer from './components/MusicPlayer'
import { MusicProvider } from './MusicContext'
import { ThemeProvider } from './ThemeContext'
import { LanguageProvider } from './LanguageContext'

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MusicProvider>
          <CursorGlow />
          <Routes>
            <Route path="/" element={<Navigate to="/shais-18th" replace />} />
            <Route path="/shais-18th" element={<CoverPage />} />
            <Route path="/shais-18th-home" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/shais-18th" replace />} />
          </Routes>
          {/* Global so the guest can silence it the moment it starts, on any page. */}
          <MusicPlayer />
        </MusicProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}
