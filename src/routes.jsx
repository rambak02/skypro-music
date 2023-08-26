import { Routes, Route } from 'react-router-dom'
import { Favorites } from './pages/favorites'
import { Main } from './pages/main/MainPage'
import { NotFound } from './pages/not-found'
import { Category } from './pages/category'
import AuthPage from './pages/auth/AuthPage'

import { ProtectedRoute } from './component/ProtectedRoute/ProtectedRoute'
import LoginPage from './pages/login/LoginPage'

export const AppRoutes = ({
  user,
  onAuthButtonClick,
  music,
  loading,
  getTracksError,
  setCurrentTrack,
  setIsPlaying,
  error,
  setError,
  email,
  setEmail,
  password,
  setPassword,
  repeatPassword,
  setRepeatPassword,
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
        element={
          <LoginPage
            onAuthButtonClick={onAuthButtonClick}
            error={error}
            setError={setError}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            repeatPassword={repeatPassword}
          />
        }
      />
      <Route
        path="/auth"
        element={
          <AuthPage
            error={error}
            setError={setError}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            repeatPassword={repeatPassword}
            setRepeatPassword={setRepeatPassword}
          />
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
