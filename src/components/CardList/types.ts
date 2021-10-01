type CardProvider = "VISA" | "MASTERCARD"

interface Card {
  firstName: string
  lastName: string
  kind: CardProvider
  number: number
  cvc: number
  expiryMonth: number
  expiryYear: number
}

export type { Card }
