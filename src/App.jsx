import { Fragment, useState, useEffect } from 'react'
import { AppRoutes } from './routes'
import { GlobalStyle } from './styled/global'
import { AudioPlayer } from './component/AudioPlayer/AudioPlayer'
import { musicData } from './constants'
import { getTracks } from './api'


function App() {
  
  const initialUserState = localStorage.getItem('user') === 'true'
  const [user, setUser] = useState(initialUserState)
  const handleLogin = () => {
    localStorage.setItem('user', 'true')
    setUser(true)
  }
  const [music, setMusic] = useState([])
  const [loading, setLoading] = useState(false)
  const [getTracksError, setGetTracksError] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [error, setError] = useState(null)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
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
      {currentTrack ?  <AudioPlayer
      volume={volume}
      setVolume={setVolume}
      currentTime= {currentTime}
      setCurrentTime={setCurrentTime}
       isRepeat = {isRepeat}
       setIsRepeat= {setIsRepeat}
          key={currentTrack.id}
          currentTrack = {currentTrack}
         isPlaying={isPlaying} 
         setIsPlaying={setIsPlaying}
        /> : null}
       
      <AppRoutes
      error = {error}
      setError = {setError}
      email = {email}
      setEmail= {setEmail}
      password = {password}
      setPassword = {setPassword}
      repeatPassword = {repeatPassword}
      setRepeatPassword= {setRepeatPassword}
       setIsPlaying={setIsPlaying}
       setCurrentTrack ={setCurrentTrack}
        user={user}
        onAuthButtonClick={handleLogin}
        music={music}
        musicData={musicData}
        loading={loading}
        getTracksError={getTracksError}
      />
    </Fragment>
  )
}
export default App
