import styled from 'styled-components/macro'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'

export default function ReviewCard({ title, details, color, rating }) {
  var d = new Date()
  return (
    <CardWrapper>
      <StarWrapper>
        {[...Array(rating || 0)].map(star => (
          <AiFillStar />
        ))}
        {[...Array(5 - rating)].map(star => (
          <AiOutlineStar />
        ))}
      </StarWrapper>
      <ReviewWrapper>
        <CardTitle>{title}</CardTitle>
        <ReviewDate> - {d.toJSON().substring(0, 10)}</ReviewDate>
      </ReviewWrapper>
      <CardText>{details}</CardText>
    </CardWrapper>
  )
}

const CardWrapper = styled.section``

const StarWrapper = styled.div``

const ReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const CardTitle = styled.h4`
  margin: 0;
  font-size: 14px;
`

const ReviewDate = styled.span`
  font-size: 12px;
`

const CardText = styled.p`
  font-size: 12px;
  line-height: 1.3em;
`
