import { Track } from "../Track/Track"
import {musicData} from "../../constants";
import { StyledCenterBlockContent, StyledContentPlaylist} from "./Tracklist.styled"


export function Tracklist ({list}) {
return (
<StyledCenterBlockContent >

<StyledContentPlaylist>
    {musicData.find(section => section.section === "Tracklist").tracks.map((track, index)=> (
        <Track key={index} track= {track} 
        />
    ))}
</StyledContentPlaylist>                        
</StyledCenterBlockContent>
)
}