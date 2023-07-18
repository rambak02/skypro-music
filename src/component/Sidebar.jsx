import { Playlist } from "./Playlist";
import { SidebarPersonal } from "./SidebarPersonal";

export function Sidebar() {
    return ( 
        <div className="main__sidebar sidebar">
       <SidebarPersonal personalName= "Sergey.Ivanov" />
        <div className="sidebar__block">
            <div className="sidebar__list">
                <Playlist imgUrl="img/playlist01.png" alt="day's playlist" />
                <Playlist imgUrl="img/playlist02.png" alt="day's playlist" />
                <Playlist imgUrl="img/playlist03.png" alt="day's playlist" />
            </div>
        </div>
    </div>
    )}