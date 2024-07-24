import { loadFeature, defineFeature, pending } from 'jest-cucumber'
import * as steps from './steps/memory.steps'

const feature = loadFeature('./tests/features/memory.feature')

defineFeature(feature, (test) => {
  test('Starting the game - Default board of 3x4', ({ given, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    })
    then(/^the board should have "(.*)" rows and "(.*)" columns$/, (numberOfRows, numberOfCols) => {
      expect(steps.boardDimensionsValidation(numberOfRows, numberOfCols)).toBe(true)
    })
  })

  test('Starting the game - All cards should be unflipped', ({ given, then }) => {
    given('the player opens the game', () => {
      pending()
    })
    then('all cards should be unflipped', () => {
      pending()
    })
  })

  test('Flipping a card - Clicking over a card', ({ given, when, then }) => {
    given('the player opens the game', () => {
      pending()
    })
    given('the player loads the following mock data', (mockData) => {
      pending()
    })
    when(/^the player right clicks on the card \("(.*)","(.*)"\)$/, (rowPosition, colPosition) => {
      pending()
    })
    then(/^the card \("(.*)","(.*)"\) should be flipped$/, (rowPos, colPos) => {
      pending()
    })
  })

  test('Flipping a card already flipped - Clicking over a card already flipped', ({ given, and, then }) => {
    given('the player opens the game', () => {
      pending()
    })
    given('the player loads the following mock data', (mockData) => {
      pending()
    })
    and(/^the player right clicks on the card \("(.*)","(.*)"\)$/, (rowPosition, colPosition) => {
      pending()
    })
    and(/^the player right clicks on the card \("(.*)","(.*)"\)$/, (rowPosition, colPosition) => {
      pending()
    })
    then(/^the card \("(.*)","(.*)"\) should be flipped$/, (rowPos, colPos) => {
      pending()
    })
  })

  test('Flipping two cards', ({ given, and, when, then }) => {
    given('the player opens the game', () => {
      pending()
    })
    given('the player loads the following mock data', (mockData) => {
      pending()
    })
    and(/^the player right clicks on the card \("(.*)","(.*)"\)$/, (rowPosition, colPosition) => {
      pending()
    })
    when(/^the player right clicks on the card \("(.*)","(.*)"\)$/, (rowPosition, colPosition) => {
      pending()
    })
    then(/^the card \("(.*)","(.*)"\) and the card \("(.*)","(.*)"\) should be flipped$/, (card1RowPos, card1ColPos, card2RowPos, card2ColPos) => {
      pending()
    })
  })

  test('Flipping two cards - Unflipping after not matching', ({ given, and, when, then }) => {
    given('the player opens the game', () => {
      pending()
    })
    given('the player loads the following mock data', (mockData) => {
      pending()
    })
    and(/^the card \("(.*)","(.*)"\) and the card \("(.*)","(.*)"\) are unflipped$/, (card1RowPos, card1ColPos, card2RowPos, card2ColPos) => {
      pending()
    })
    when(/^the player right clicks on the card \("(.*)","(.*)"\)$/, (rowPosition, colPosition) => {
      pending()
    })
    then(/^the card \("(.*)","(.*)"\) should be flipped$/, (rowPos, colPos) => {
      pending()
    })
    and(/^the card \("(.*)","(.*)"\) and the card \("(.*)","(.*)"\) should be unflipped$/, (card1RowPos, card1ColPos, card2RowPos, card2ColPos) => {
      pending()
    })
  })

  test('Flipping two cards - Fipping other cards after a match ', ({ given, and, when, then }) => {
    given('the player opens the game', () => {
      pending()
    })
    given('the player loads the following mock data', (mockData) => {
      pending()
    })
    and(/^the card \("(.*)","(.*)"\) and the card \("(.*)","(.*)"\) are unflipped$/, (card1RowPos, card1ColPos, card2RowPos, card2ColPos) => {
      pending()
    })
    when(/^the player right clicks on the card \("(.*)","(.*)"\)$/, (rowPosition, colPosition) => {
      pending()
    })
    then(/^the card \("(.*)","(.*)"\) should be flipped$/, (rowPos, colPos) => {
      pending()
    })
    and(/^the card \("(.*)","(.*)"\) and the card \("(.*)","(.*)"\) should be flipped$/, (card1RowPos, card1ColPos, card2RowPos, card2ColPos) => {
      pending()
    })
  })
})
