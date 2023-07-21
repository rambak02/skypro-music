import React from "react";
import Skeleton, {SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { musicData } from "./Data";
const SkeletonCardTracklist = () => {
    return (
        <SkeletonTheme baseColor="grey" highlightColor="#444">
       
           {musicData.find(section => section.section === "Tracklist").tracks.map((track, index)=> (
         <div key={index} className="playlist__item">
         <div className="playlist__track track">
             <div className="track__title">
                 <div className="track__title-image">
                     <svg className="track__title-svg" alt="music">
                         <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                     </svg>
                 </div>
                 <div className="track__title-text">
                     <a className="track__title-link" href="http://">{<Skeleton width={300}/> }<span className="track__title-span">    {}</span></a>
                 </div>
             </div>
             <div className="track__author">
                 <a className="track__author-link" href="http://">{<Skeleton width={300}/>}</a>
             </div>
             <div className="track__album track__album-skeleton">
                {<Skeleton max-width={390}/>}
             </div>
             
         </div>
     </div>
            ))}
        
      </SkeletonTheme>
    );
  };

 export function SkeletonCardPlaylist() {
    return ( 
        musicData.find(section => section.section === "Sidebar").playlists.map((index)=> (
            <SkeletonTheme key={index} baseColor="grey" highlightColor="#444">
                <div className="sidebar__item">
                    <a className= "sidebar__img" href="#">
                     {<Skeleton width={250} height={150} />} 
                    </a>
                </div>
        </SkeletonTheme>
        ))
    )}
    export function SkeletonCardAudioPlayer() {
        return ( 
            <SkeletonTheme baseColor="grey" highlightColor="#444">
            <div className="bar">
            <div className="bar__content">
                <div className="bar__player-progress"></div>
                <div className="bar__player-block">
                    <div className="bar__player player">
                        <div className="player__controls">
                            <div className="player__btn-prev">
                                <svg className="player__btn-prev-svg" alt="prev">
                                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                                </svg>
                            </div>
                            <div className="player__btn-play _btn">
                                <svg className="player__btn-play-svg" alt="play">
                                    <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                                </svg>
                            </div>
                            <div className="player__btn-next">
                                <svg className="player__btn-next-svg" alt="next">
                                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                                </svg>
                            </div>
                            <div className="player__btn-repeat _btn-icon">
                                <svg className="player__btn-repeat-svg" alt="repeat">
                                    <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                                </svg>
                            </div>
                            <div className="player__btn-shuffle _btn-icon">
                                <svg className="player__btn-shuffle-svg" alt="shuffle">
                                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                                </svg>
                            </div>
                        </div>
                        
                        <div className="player__track-play track-play">
                            <div className="track-play__contain">
                                <div className="track-play__image">
                                    <svg className="track-play__svg" alt="music">
                                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className="track-play__author">
                                    <a className="track-play__author-link" href="http://"> {<Skeleton min-width={49}  />}</a>
                                </div>
                                <div className="track-play__album">
                                    <a className="track-play__album-link" href="http://">{<Skeleton min-width={49}/>}</a>
                                </div>
                            </div>
            
                            <div className="track-play__like-dis">
                                <div className="track-play__like _btn-icon">
                                    <svg className="track-play__like-svg" alt="like">
                                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                    </svg>
                                </div>
                                <div className="track-play__dislike _btn-icon">
                                    <svg className="track-play__dislike-svg" alt="dislike">
                                        <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bar__volume-block volume">
                       <div className="volume__content">
                            <div className="volume__image">
                                <svg className="volume__svg" alt="volume">
                                    <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                                </svg>
                            </div>
                            <div className="volume__progress _btn">
                                <input className="volume__progress-line _btn" type="range" name="range"/>
                            </div>
                            
                       </div>
                    </div>
                </div>
            </div>
            </div>
            </SkeletonTheme>
        )}
  export default SkeletonCardTracklist