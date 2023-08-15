import { useParams } from 'react-router-dom'
import { musicData } from '../../constants'

export const Category = () => {
  const params = useParams()
  const playlistSection = musicData.find(
    (section) => section.section === 'Sidebar',
  )
  const selectedPlaylist = playlistSection.playlists.find(
    (playlist) => playlist.id === Number(params.id),
  )
  return (
    <div>
      <h1>Category: {selectedPlaylist.id}</h1>
    </div>
  )
}
