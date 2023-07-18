import { Track } from "./Track";

export function Tracklist () {
return (<div className="centerblock__content">
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
<div className="content__playlist playlist">
    <Track title="Guilt" author="Nero" album="Welcome Reality" time="4:44"/>
    <Track title="Elektro" author="Dynoro, Outwork, Mr. Gee" album="Elektro" time="2:22"/>
    <Track title="I’m Fire" author="Ali Bakgor" album="I’m Fire" time="2:22"/>
    <Track title="Non Stop" titleSpan=" (Remix)" author="Стоункат, Psychopath" album="Run Run" time="2:54"/>
    <Track title="Run Run" titleSpan=" (feat. AR/CO)" author="Jaded, Will Clarke, AR/CO" album="Welcome Reality" time="4:44"/>
    <Track title="Eyes on Fire" titleSpan=" (Zeds Dead Remix)" author="Blue Foundation, Zeds Dead" album="Eyes on Fire" time="5:20"/>
    <Track title="Mucho Bien" titleSpan=" (Hi Profile Remix)" author="HYBIT, Mr. Black, Offer Nissim, Hi Profile"  album="Mucho Bien" time="3:41"/>
    <Track title="Knives n Cherries" author="minthaze" album="Captivating" time="1:48"/>
    <Track title="How Deep Is Your Love " author="Calvin Harris, Disciples" album="How Deep Is Your Love" time="3:32"/>
    <Track title="Morena" author="Tom Boxer" album="Soundz Made in Romania" time="3:36"/>
    <Track title="Guilt" author="Nero" album="Welcome Reality" time="4:44"/>
</div>                        
</div>
)
}