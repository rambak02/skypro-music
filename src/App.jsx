import { Fragment, useState, useEffect } from 'react'
import { AppRoutes } from './routes'
import { GlobalStyle } from './styled/global'
import { AudioPlayer } from './component/AudioPlayer/AudioPlayer'
import { musicData } from './constants'
import { getTracks } from './api'
import { useNavigate } from 'react-router-dom'
import { loginUser } from './api'
import { authUser } from './api'
import { UserContext } from './contexts/Context'

function App() {
  const navigate = useNavigate()
  const handleLogout = async () => {
    localStorage.setItem('user', false)
    navigate('/login', { replace: true })
  }
  const handleLogin = async () => {
    setPrimaryButton(true)
    if (email === '' && password === '') {
      setError('Укажите email и пароль')
    } else if (email === '') {
      setError('Укажите email')
    } else if (password === '') {
      setError('Укажите пароль')
    } else {
      try {
        const response = await loginUser(email, password)
        console.log('Пользователь успешно зашел:', response)
        navigate('/', { replace: true })
        localStorage.setItem('user', email)
      } catch (error) {
        setError(error.message)
      }
    }
    setPrimaryButton(false)
  }
  const handleRegister = async () => {
    setPrimaryButton(true)
    if (email === '' && password === '') {
      setError('Укажите email и пароль')
    } else if (email === '') {
      setError('Укажите email')
    } else if (password === '') {
      setError('Укажите пароль')
    } else if (password !== repeatPassword) {
      setError('Пароли не совпадают')
    } else {
      try {
        const response = await authUser(email, password)
        console.log('Пользователь успешно зарегистрирован:', response)
        navigate('/login', { replace: true })
        localStorage.setItem('user', email)
      } catch (error) {
        setError(error.message)
      }
    }
    setPrimaryButton(false)
  }
  const [music, setMusic] = useState([])
  const [loading, setLoading] = useState(false)
  const [getTracksError, setGetTracksError] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(1)
  const [error, setError] = useState(null)
  const [primaryButton, setPrimaryButton] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const localUser = localStorage.getItem('user')
  useEffect(() => {
    async function fetchTracks() {
      try {
        const tracks = await getTracks()
        setMusic(tracks)
        setLoading(true)
      } catch (error) {
        setGetTracksError('Не удалось загрузить плейлист, попробуйте позже')
        setLoading(true)
      }
    }

    fetchTracks()
  }, [])
  const [currentTrack, setCurrentTrack] = useState(null)
  return (
    <Fragment>
      <GlobalStyle />
      {currentTrack ? (
        <AudioPlayer
          volume={volume}
          setVolume={setVolume}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          isRepeat={isRepeat}
          setIsRepeat={setIsRepeat}
          key={currentTrack.id}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      ) : null}
      <UserContext.Provider value={{localUser, handleLogin, handleLogout}}>
        <AppRoutes
        isPlaying={isPlaying}
        localUser={localUser}
          primaryButton={primaryButton}
          error={error}
          setError={setError}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          repeatPassword={repeatPassword}
          setRepeatPassword={setRepeatPassword}
          setIsPlaying={setIsPlaying}
          setCurrentTrack={setCurrentTrack}
          currentTrack={currentTrack}
          onAuthButtonClick={handleRegister}
          music={music}
          musicData={musicData}
          loading={loading}
          getTracksError={getTracksError}
        />
      </UserContext.Provider>
    </Fragment>
  )
}
export default App
