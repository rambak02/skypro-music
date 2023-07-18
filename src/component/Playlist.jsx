export function Playlist(props) {
    return ( 
                <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                        <img className="sidebar__img" src= {props.imgUrl} alt={props.alt}/>
                    </a>
                </div>
    )}