import React, { useState } from 'react'
import {
  StyledFilterButton,
  StyledDropdownContainer,
  StyledDropdownText,
  StyledFilterTitle,
  StyledFilterCenterBlock,
  StyledDropdown,
} from './Dropdown.styled'
export function Dropdown() {
  const [openFilter, setOpenFilter] = useState(null)
  const openFilterGenreClick = () => {
    if (openFilter === 'genre') {
      setOpenFilter(null)
    } else {
      setOpenFilter('genre')
    }
  }
  const openFilterAuthorClick = () => {
    if (openFilter === 'author') {
      setOpenFilter(null)
    } else {
      setOpenFilter('author')
    }
  }

  return (
    <StyledFilterCenterBlock>
      <StyledFilterTitle>Искать по:</StyledFilterTitle>
      <div>
        <StyledFilterButton
          className="_btn-text"
          onClick={openFilterAuthorClick}
        >
          исполнителю
        </StyledFilterButton>
        {openFilter === 'author' && (
          <StyledDropdown>
            <StyledDropdownContainer>
              <StyledDropdownText>Michael Jackson</StyledDropdownText>
              <StyledDropdownText>Frank Sinatra</StyledDropdownText>
              <StyledDropdownText>Calvin</StyledDropdownText>
              <StyledDropdownText>Zhu</StyledDropdownText>
              <StyledDropdownText>Arctic Monkeys</StyledDropdownText>
            </StyledDropdownContainer>
          </StyledDropdown>
        )}
      </div>

      <StyledFilterButton className=" _btn-text">
        году выпуска
      </StyledFilterButton>

      <div>
        <StyledFilterButton
          className="_btn-text"
          onClick={openFilterGenreClick}
        >
          жанру
        </StyledFilterButton>
        {openFilter === 'genre' && (
          <StyledDropdown>
            <StyledDropdownContainer>
              <StyledDropdownText>Хип-хоп</StyledDropdownText>
              <StyledDropdownText>Поп-музыка</StyledDropdownText>
              <StyledDropdownText>Техно</StyledDropdownText>
              <StyledDropdownText>Инди</StyledDropdownText>
              <StyledDropdownText>Рок</StyledDropdownText>
            </StyledDropdownContainer>
          </StyledDropdown>
        )}
      </div>
    </StyledFilterCenterBlock>
  )
}
