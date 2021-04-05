import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import LinesEllipsis from 'react-lines-ellipsis'
import { IconContext } from 'react-icons'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiFillCalendar } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'

export default function MiniCard({
  image,
  altText,
  title,
  stars,
  price,
  frequency,
  zip,
  city,
  dates,
}) {
  return (
    <IconContext.Provider value={{ size: '14px' }}>
      <Card>
        <ImageWrapper>
          <Image src={image} alt={altText} />
        </ImageWrapper>
        <DetailsWrapper>
          <TitleWrapper>
            <LinesEllipsis text={title} maxLine="1" />
          </TitleWrapper>
          <StarsWrapper>
            {[...Array(stars)].map(star => (
              <AiFillStar />
            ))}
            {[...Array(5 - stars)].map(star => (
              <AiOutlineStar />
            ))}
          </StarsWrapper>
          <Price>
            {price}€ {frequency}
          </Price>
          <PlaceWrapper>
            <FaMapMarkerAlt />
            <Place>
              {zip} {city}
            </Place>
          </PlaceWrapper>
          <DatesWrapper>
            <AiFillCalendar />
            <Dates>{dates}</Dates>
          </DatesWrapper>
        </DetailsWrapper>
      </Card>
    </IconContext.Provider>
  )
}

MiniCard.propTypes = {
  image: PropTypes.string,
  altText: PropTypes.string,
  title: PropTypes.string,
  stars: PropTypes.number,
  price: PropTypes.number,
  frequency: PropTypes.string,
  zip: PropTypes.string,
  city: PropTypes.string,
  dates: PropTypes.string,
}

const Card = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
  background-color: #eee;
  color: black;
  text-decoration: none;
  margin: 0 5px;
`

const ImageWrapper = styled.div``

const Image = styled.img`
  width: 100%;
  height: 100%;
`

const DetailsWrapper = styled.div`
  display: grid;
  gap: 5px;
  margin: 10px 0;
`

const TitleWrapper = styled.h2`
  font-size: 12px;
  margin: 0;
`

const StarsWrapper = styled.div``

const Price = styled.span`
  font-size: 14px;
  margin: 0;
`

const DatesWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`

const Dates = styled.div`
  font-size: 12px;
`

const PlaceWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`

const Place = styled.div`
  font-size: 12px;
`
