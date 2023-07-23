import React, { useState } from "react";
export function Dropdown() {
    const [dropdownAuthorState, setDropdownAuthorState] = useState({openFilterAuthor: false});
    const handleDropdownAuthorClick = () => { 
    setDropdownAuthorState({ openFilterAuthor: !dropdownAuthorState.openFilterAuthor})
    setDropdownGenreState({ openFilterGenre: false})
};
    const [dropdownGenreState, setDropdownGenreState] = useState({openFilterGenre: false});
    const handleDropdownGenreClick = () => {
    setDropdownGenreState({ openFilterGenre: !dropdownGenreState.openFilterGenre})
    setDropdownAuthorState({ openFilterAuthor: false});
};
    
    
    return (
    <div className="centerblock__filter filter">
    <div className="filter__title">Искать по:
    </div>
    <div>
    <div className="filter__button button-author _btn-text"
    onClick={handleDropdownAuthorClick}>исполнителю
    </div>
    {dropdownAuthorState.openFilterAuthor && ( <ul 
    className="button-author _dropdown ">
        <div className="_dropdown_container">
        <li className="author-dropdown _dropdown-text">Michael Jackson</li>
        <li className="author-dropdown _dropdown-text">Frank Sinatra</li>
        <li className="author-dropdown _dropdown-text">Calvin</li>
        <li className="author-dropdown _dropdown-text">Zhu</li>
        <li className="author-dropdown _dropdown-text">Arctic Monkeys</li>
        </div>
    </ul>)}
        </div> 
   

    <div className="filter__button button-year _btn-text">году выпуска</div>
    
    <div>
    <div className="filter__button button-genre _btn-text"
    onClick={handleDropdownGenreClick}>жанру</div>
    {dropdownGenreState.openFilterGenre && ( <ul className=" button-genre _dropdown  ">
        <div className="_dropdown_container">
        <li className="genre-dropdown _dropdown-text">Хип-хоп</li>
        <li className="genre-dropdown _dropdown-text">Поп-музыка</li>
        <li className="genre-dropdown _dropdown-text">Техно</li>
        <li className="genre-dropdown _dropdown-text">Инди</li>
        <li className="genre-dropdown _dropdown-text">Рок</li>
        </div>
    </ul>)}
   
    </div>
</div>

    )
}