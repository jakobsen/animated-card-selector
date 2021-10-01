import { Card } from "./types"

function formatCardNumber(cardNumber: number): string {
  const numberAsString = cardNumber.toString()
  const lastFourDigits = numberAsString.slice(numberAsString.length - 4)
  return `XXXX XXXX XXXX ${lastFourDigits}`
}

function formatCardDate(card: Card): string {
  const monthString = card.expiryMonth.toString().padStart(2, "0")
  const yearString = card.expiryYear.toString().padStart(2, "0")
  return `${monthString}/${yearString}`
}

export { formatCardNumber, formatCardDate }
