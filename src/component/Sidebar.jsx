import { Playlist } from "./Playlist";
import { SidebarPersonal } from "./SidebarPersonal";
import { musicData } from "./Data";
import { SkeletonCardPlaylist} from "./SkeletonCard";

export function Sidebar({loading}) {
    return ( 
        <div className="main__sidebar sidebar">
       <SidebarPersonal personalName= "Sergey.Ivanov" />
        <div className="sidebar__block">
            <div className="sidebar__list">
            {!loading && musicData.find(section => section.section === "Sidebar").playlists.map((playlist, index)=> (
        <Playlist 
        key={index}
        imgUrl={playlist.imgUrl}
        alt={playlist.alt}
        /> 
    )) || <SkeletonCardPlaylist/>}
            </div>
        </div>
    </div>
    )}