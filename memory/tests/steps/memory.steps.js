import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Page from '../../src/app/page'
import Game from '../../src/components/Game'

// sample tests
export function openThePage () {
  render(<Page />)
}

export function getTitle () {
  const title = screen.getByTestId('app-title')
  return title.innerHTML
}
// game tests
export function openTheGame () {
  render(<Game />)
}

export function boardDimensionsValidation (rows, cols) {
  let validBoard = false
  const cards = screen.getAllByTestId('board-card', { exact: false })
  if (cards.length === rows * cols) validBoard = true
  return validBoard
}

export function allCardsUnflipped() {
  let cards = screen.getAllByTestId('board-card', { exact: false });
  return cards.every(card => {
    return card.classList.contains('unflipped');
  });
}