import { Routes, Route } from 'react-router-dom'
import { Favorites } from './pages/favorites'
import { Main } from './pages/main/MainPage'
import { NotFound } from './pages/not-found'
import { Category } from './pages/category'
import { Login } from './pages/login/LoginPage'
import { Register } from './pages/register'

import { ProtectedRoute } from './component/ProtectedRoute/ProtectedRoute'

export const AppRoutes = ({
  user,
  onAuthButtonClick,
  music,
  loading,
  getTracksError,
setCurrentTrack,
setIsPlaying
}) => {
  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={user} />}>
        <Route
          path="/"
          element={
            <Main
            setIsPlaying={setIsPlaying}
              music={music}
              loading={loading}
              getTracksError={getTracksError}
             setCurrentTrack={setCurrentTrack}
            />
          }
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>

      <Route
        path="/login"
        element={<Login onAuthButtonClick={onAuthButtonClick} />}
      />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
