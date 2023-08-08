import React from "react";
import Skeleton, {SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { musicData } from "../Data";
import { StyledSidebarLink, StyledSidebarItem, StyledPlaylistItem, StyledPlaylistTrack } from "../Playlist/Playlist.styled";
import { StyledBar, StyledBarContent, StyledBarPlayer, StyledBarPlayerBlock, StyledBarPlayerProgress, StyledButtonPrevSvg, StyledButtonPrev, StyledPlayerControls, StyledButtonPlay, StyledButtonPlaySvg, StyledButtonNext, StyledButtonNextSvg, StyledButtonRepeat, StyledButtonShuffle, StyledButtonRepeatSvg, StyledButtonShuffleSvg, StyledBarVolumeBlock, StyledBarVolumeContent, StyledVolumeImage, StyledVolumeSvg, StyledVolumeProgress, StyledVolumeProgressLine, StyledPlayTrack, StyledPlayTrackAlbum, StyledPlayTrackAlbumLink, StyledPlayTrackAuthor, StyledPlayTrackAuthorLink, StyledPlayTrackContainer, StyledPlayTrackImage, StyledPlayTrackLikeDis, StyledPlayTrackSvg, StyledTrackDislike, StyledTrackDislikeSvg, StyledTrackLike, StyledTrackLikeSvg } from "../AudioPlayer/AudioPLayer.styled";
import { StyledTrackAlbumSkeleton } from "./SkeletonCard.styled";
import { StyledTrackTitles, StyledTrackTitleImage, StyledTrackTitleSvg, StyledTrackTitleLink, StyledTrackTitleSpan, StyledTrackAuthor, StyledTrackAuthorLink } from "../Track/Track.styled"




 const SkeletonCardTracklist = () => {
    return (
        <SkeletonTheme baseColor="#313131" highlightColor="#444">
       
           {musicData.find(section => section.section === "Tracklist").tracks.map((track, index)=> (
         <StyledPlaylistItem key={index}>
         <StyledPlaylistTrack>
             <StyledTrackTitles>
                 <StyledTrackTitleImage>
                     <StyledTrackTitleSvg alt="music">
                        {<Skeleton width={50}/>}
                     </StyledTrackTitleSvg>
                 </StyledTrackTitleImage>
                 <div>
                     <StyledTrackTitleLink href="http://">{<Skeleton width={300}/> }<StyledTrackTitleSpan>    {}</StyledTrackTitleSpan></StyledTrackTitleLink>
                 </div>
             </StyledTrackTitles>
             <StyledTrackAuthor>
                 <StyledTrackAuthorLink href="http://">{<Skeleton width={300}/>}</StyledTrackAuthorLink>
             </StyledTrackAuthor>
             <StyledTrackAlbumSkeleton>
                {<Skeleton max-width={390}/>}
             </StyledTrackAlbumSkeleton>
             
         </StyledPlaylistTrack>
     </StyledPlaylistItem>
            ))}
        
      </SkeletonTheme>
    );
  };

 export function SkeletonCardPlaylist() {
    return ( 
        musicData.find(section => section.section === "Sidebar").playlists.map((index)=> (
            <SkeletonTheme key={index} baseColor="#313131" highlightColor="#444">
                <StyledSidebarItem>
                    <StyledSidebarLink href="#">
                     {<Skeleton width={250} height={150} />} 
                    </StyledSidebarLink>
                </StyledSidebarItem>
        </SkeletonTheme>
        ))
    )}
    export function SkeletonCardAudioPlayer() {
        return ( 
            <SkeletonTheme baseColor="#313131" highlightColor="#444">
            <StyledBar>
            <StyledBarContent>
                <StyledBarPlayerProgress></StyledBarPlayerProgress>
                <StyledBarPlayerBlock>
                    <StyledBarPlayer>
                        <StyledPlayerControls>
                            <StyledButtonPrev>
                                <StyledButtonPrevSvg alt="prev">
                                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                                </StyledButtonPrevSvg>
                            </StyledButtonPrev>
                            <StyledButtonPlay className=" _btn">
                                <StyledButtonPlaySvg  alt="play">
                                    <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                                </StyledButtonPlaySvg>
                            </StyledButtonPlay>
                            <StyledButtonNext>
                                <StyledButtonNextSvg alt="next">
                                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                                </StyledButtonNextSvg>
                            </StyledButtonNext>
                            <StyledButtonRepeat className="player__btn-repeat _btn-icon">
                                <StyledButtonRepeatSvg className="player__btn-repeat-svg" alt="repeat">
                                    <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                                </StyledButtonRepeatSvg>
                            </StyledButtonRepeat>
                            <StyledButtonShuffle className=" _btn-icon">
                                <StyledButtonShuffleSvg alt="shuffle">
                                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                                </StyledButtonShuffleSvg>
                            </StyledButtonShuffle>
                        </StyledPlayerControls>
                        <StyledPlayTrack>
                <StyledPlayTrackContainer>
                    <StyledPlayTrackImage>
                        <StyledPlayTrackSvg alt="music">
                            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </StyledPlayTrackSvg>
                    </StyledPlayTrackImage>
                    <StyledPlayTrackAuthor >
                        <StyledPlayTrackAuthorLink href="http://"> {<Skeleton min-width={49}  />}</StyledPlayTrackAuthorLink>
                    </StyledPlayTrackAuthor>
                    <StyledPlayTrackAlbum >
                        <StyledPlayTrackAlbumLink href="http://">{<Skeleton min-width={49}/>}</StyledPlayTrackAlbumLink>
                    </StyledPlayTrackAlbum>
                </StyledPlayTrackContainer>

                <StyledPlayTrackLikeDis>
                    <StyledTrackLike className=" _btn-icon">
                        <StyledTrackLikeSvg  alt="like">
                            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                        </StyledTrackLikeSvg>
                    </StyledTrackLike>
                    <StyledTrackDislike className=" _btn-icon">
                        <StyledTrackDislikeSvg alt="dislike">
                            <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                        </StyledTrackDislikeSvg>
                    </StyledTrackDislike>
                </StyledPlayTrackLikeDis>
            </StyledPlayTrack>
                    </StyledBarPlayer>
                    <StyledBarVolumeBlock>
           <StyledBarVolumeContent>
                <StyledVolumeImage>
                    <StyledVolumeSvg alt="volume">
                        <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                    </StyledVolumeSvg>
                </StyledVolumeImage>
                <StyledVolumeProgress className=" _btn">
                    <StyledVolumeProgressLine className=" _btn" type="range" name="range"/>
                </StyledVolumeProgress>
                
           </StyledBarVolumeContent>
        </StyledBarVolumeBlock>
                </StyledBarPlayerBlock>
            </StyledBarContent>
            </StyledBar>
            </SkeletonTheme>
        )}
  export default SkeletonCardTracklist