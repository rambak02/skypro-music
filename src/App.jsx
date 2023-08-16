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

  useEffect(() => {
    // 1. Вариант
    //  getTracks()
    // .then((tracks) => {
    //   setMusic(tracks);
    //   setLoading(true);
    // })
    // .catch((error) => {
    //   setGetTracksError('Не удалось загрузить плейлист, попробуйте позже');
    //   setLoading(true);
    // });
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
          key={currentTrack.id}
          currentTrack = {currentTrack}
        /> : null}
       
    
      <AppRoutes
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
