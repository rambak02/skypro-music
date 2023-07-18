import './App.scss';
import { AudioPlayer } from './component/AudioPlayer';
import { Filter } from './component/Filter';
import { NavMenu } from './component/NavMenu';
import { Search } from './component/Search';
import { Sidebar } from './component/Sidebar';
import { Tracklist } from './component/Tracklist';

function App() {
  return (  
    <div className="wrapper">
    <div className="container">
        <main className="main">   
        <NavMenu/>
            <div className="main__centerblock centerblock">
              <Search/>
                <h2 className="centerblock__h2">Треки</h2>
               <Filter/>
             <Tracklist/>
            </div>
          <Sidebar />
        </main>
      <AudioPlayer title="Ты та..." author="Баста"/>
        <footer className="footer"></footer>
    </div>
</div>
  );
}

export default App;
