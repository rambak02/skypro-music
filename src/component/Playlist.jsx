import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export function Playlist({imgUrl, alt}) {
    return ( 
                <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                        <img className="sidebar__img" src= {imgUrl} alt={alt} />
                    </a>
                </div>
    )}