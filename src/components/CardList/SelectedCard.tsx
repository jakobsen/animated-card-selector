import styled from "styled-components"
import { Card } from "./types"
import { formatCardDate, formatCardNumber } from "./utils"
import { ReactComponent as UnstyledVisaLogo } from "./visaLogo.svg"
import { ReactComponent as UnstyledMastercardLogo } from "./mastercardLogo.svg"
import { HTMLMotionProps, motion } from "framer-motion"

interface SelectedCardProps extends HTMLMotionProps<"div"> {
  card: Card
}

function SelectedCard({ card, ...delegated }: SelectedCardProps): JSX.Element {
  return (
    <Wrapper {...delegated}>
      <LogoWrapper layoutId={`${card.number}__logo`}>
        {card.kind == "VISA" ? <VisaLogo /> : <MastercardLogo />}
      </LogoWrapper>
      <Name>
        {card.firstName} {card.lastName}
      </Name>
      <CardNumber layoutId={`${card.number}__sub`}>
        {formatCardNumber(card.number)}
      </CardNumber>
      <CardInfo>
        <CardInfoElement>{formatCardDate(card)}</CardInfoElement>
        <CardInfoElement>XXX</CardInfoElement>
      </CardInfo>
    </Wrapper>
  )
}

const Wrapper = styled(motion.div)`
  max-width: 325px;
  background: linear-gradient(
    180deg,
    #c8ffeb,
    #cafdeb,
    #cbfbeb,
    #cdf9eb,
    #cff7eb,
    #d1f5ea,
    #d2f3ea,
    #d4f1e9,
    #d6efe9,
    #d8ede8,
    #daebe7,
    #dce9e6
  );
  padding: 25px;
  border-radius: 10px;
`
const VisaLogo = styled(UnstyledVisaLogo)`
  width: 100%;
`

const MastercardLogo = styled(UnstyledMastercardLogo)`
  width: 100%;
`

const LogoWrapper = styled(motion.div)`
  width: 41px;
  margin-bottom: 30px;
`

const Name = styled(motion.span)`
  display: block;
  margin-bottom: 8px;
`

const CardNumber = styled(motion.div)`
  font-size: ${20 / 16}rem;
  margin-bottom: 30px;
`

const CardInfo = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`

const CardInfoElement = styled(motion.span)`
  display: inline-block;
`

export default SelectedCard
