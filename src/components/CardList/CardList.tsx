import styled from "styled-components"
import SelectedCard from "./SelectedCard"
import { cards } from "./cardData"
import AvailableCard from "./AvailableCard"
import { useState } from "react"
import { Card } from "./types"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"

function CardList(): JSX.Element {
  const [selectedCard, setSelectedCard] = useState<Card>()

  const handleClick = (card: Card): void => {
    setSelectedCard(card)
  }

  return (
    <Wrapper>
      <AnimateSharedLayout type="crossfade">
        {selectedCard && (
          <>
            <AnimatePresence>
              <SelectedCardHeading
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Ditt betalingskort
              </SelectedCardHeading>
            </AnimatePresence>
            <SelectedCard
              card={selectedCard}
              layoutId={selectedCard.number.toString()}
              key={selectedCard.number.toString()}
            />
          </>
        )}

        <AvailableCardsHeading>Dine lagrede kort</AvailableCardsHeading>

        <AvailableCardsWrapper>
          {cards.map(
            (card) =>
              card.number != selectedCard?.number && (
                <AvailableCard
                  card={card}
                  key={card.number}
                  handleClick={handleClick}
                  layoutId={card.number.toString()}
                />
              )
          )}
        </AvailableCardsWrapper>
      </AnimateSharedLayout>
    </Wrapper>
  )
}

const Wrapper = styled(motion.div)`
  max-width: 325px;
  margin: 60px auto 0;
`

const SelectedCardHeading = styled(motion.h2)`
  font-weight: 400;
  margin-bottom: 30px;
  font-size: ${20 / 16}rem;
`

const AvailableCardsHeading = styled(motion.h3)`
  font-weight: 400;
  font-size: 1rem;
  margin-top: 40px;
  margin-bottom: 18px;
`

const AvailableCardsWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
`

export default CardList
