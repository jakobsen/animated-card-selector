import styled from "styled-components"
import { HTMLMotionProps, motion } from "framer-motion"
import { Card } from "./types"
import { ReactComponent as UnstyledVisaLogo } from "./visaLogo.svg"
import { ReactComponent as UnstyledMastercardLogo } from "./mastercardLogo.svg"
import { formatCardNumber } from "./utils"

interface AvailableCardProps extends HTMLMotionProps<"div"> {
  card: Card
  className?: string
  handleClick?: (card: Card) => void
}

function AvailableCard({
  card,
  handleClick,
  ...delegated
}: AvailableCardProps): JSX.Element {
  return (
    <Wrapper
      {...delegated}
      whileHover={{ scale: 1.1 }}
      onClick={() => {
        handleClick && handleClick(card)
      }}
    >
      <LogoWrapper layoutId={`${card.number}__logo`}>
        {card.kind == "VISA" ? <VisaLogo /> : <MastercardLogo />}
      </LogoWrapper>
      <motion.div layoutId={`${card.number}__sub`}>
        {formatCardNumber(card.number)}
      </motion.div>
    </Wrapper>
  )
}

const Wrapper = styled(motion.div)`
  max-width: 325px;
  padding: 12px 25px;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(
    180deg,
    #fff6c8,
    #fef7ca,
    #fef8cb,
    #fef9cd,
    #fdf9ce,
    #fdfad0,
    #fcfbd2,
    #fcfcd3,
    #fcfdd5,
    #fbfdd7,
    #fbfed8,
    #fbffda
  );
  overflow: hidden;
`

const LogoWrapper = styled(motion.div)`
  width: 41px;
`

const VisaLogo = styled(UnstyledVisaLogo)`
  width: 100%;
`

const MastercardLogo = styled(UnstyledMastercardLogo)`
  width: 100%;
`

export default AvailableCard
