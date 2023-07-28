import './App.scss';
import { AudioPlayer } from './component/AudioPlayer';
import { Filter } from './component/Filter';
import { NavMenu } from './component/NavMenu';
import { Search } from './component/Search';
import { Sidebar } from './component/Sidebar';
import { Tracklist } from './component/Tracklist';
import { musicData } from './component/Data';
import { useState, useEffect } from 'react';
import SkeletonCardTracklist, { SkeletonCardAudioPlayer} from './component/SkeletonCard';
import { Dropdown } from './component/Dropdown';

function App() {


  const [music, setMusic] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  setLoading(true);
  const timer = setTimeout(() => {
    setMusic([musicData[2]]);
    setLoading(false);
  }, 1000);
  return () => clearTimeout(timer)
 }, []);

  return (  
    <div className="wrapper">
    <div className="container">
        <main className="main">   
       <NavMenu/>
            <div className="main__centerblock centerblock">
              <Search/>
                <h2 className="centerblock__h2">Треки</h2>
               <Dropdown/>
               <div className="content__title playlist-title">
    <div className="playlist-title__col col01">Трек</div>
    <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>   
    <div className="playlist-title__col col03">АЛЬБОМ</div>
    <div className="playlist-title__col col04">
        <svg className="playlist-title__svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
        </svg>
    </div>
</div>

      {!loading &&
                music.map((list, index)=> {
                  return (
                    <Tracklist key={index} list={list}/>
                  )
                })
              || <SkeletonCardTracklist /> }
           
            </div>
            <Sidebar loading={loading} /> 
          
        </main>
            {!loading && musicData.find(section => section.section === "AudioPlaylist").audios.map((audio, index)=> (
        <AudioPlayer 
        key={index}
        title={audio.title}
        author={audio.author}
        />
    )) ||  <SkeletonCardAudioPlayer/>}
        <footer className="footer"></footer>
    </div>
</div>
  );
}

export default App;
