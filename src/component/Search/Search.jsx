import { StyledCenterblockSearch, StyledSearchSvg, StyledSearchText } from "./Search.styled"

export function Search() {
    return (
<StyledCenterblockSearch>
<StyledSearchSvg>
    <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
</StyledSearchSvg>
<StyledSearchText type="search" placeholder="Поиск" name="search"/>
</StyledCenterblockSearch> )
}