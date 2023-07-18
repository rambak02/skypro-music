export function Playlist({imgUrl, alt}) {
    return ( 
                <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                        <img className="sidebar__img" src= {imgUrl} alt={alt}/>
                    </a>
                </div>
    )}