import { Track } from "./Track";
import {musicData} from "./Data";

export function Tracklist ({list}) {
return (
<div className="centerblock__content">

<div className="content__playlist playlist">
    {musicData.find(section => section.section === "Tracklist").tracks.map((track, index)=> (
        <Track key={index} track= {track} 
        />
    ))}
</div>                        
</div>
)
}