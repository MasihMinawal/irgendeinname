import { useState } from 'react'
import styled from 'styled-components/macro'

import StarRating from './StarRating'
import ImageCarousel from './ImageCarousel'
import DropdownForm from './DropdownForm'
import Review from './Review'
import ReviewCard from './ReviewCard'

import Logo from '../material/images/fussball/LogoScVictoria.png'

import { products } from '../material/data/data.json'
import { favorites } from '../material/data/data.json'
import { IconContext } from 'react-icons'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { AiFillPlusSquare } from 'react-icons/ai'
import { AiFillCalendar } from 'react-icons/ai'
import { AiFillHome } from 'react-icons/ai'


import { useHistory, useParams, withRouter } from "react-router-dom";


export default function ProductCard({}) {
  let [bookmarkedCard, setbookmarkedCard] = useState(0)
  let [reviewCards, setreviewCards] = useState([])
  const { id } = useParams(); 

  let title = "";
  let price = "";
  let frequency = "";
  let provider = "";
  let address = "";
  let zip = "";
  let city = "";
  let dates = "";
  let description = "";
  let pId = parseInt(id);

 /* Fetch product data */
 products.map(product => {
    if(product.id === parseInt(id))
    {
      title = product.title;
      price = product.price;
      frequency = product.frequency;
      provider = product.provider;
      address =  product.address;
      zip = product.zip;
      city = product.city;
      dates = product.dates;
      description = product.description;
    }
 })


 /* Fetch id of bookmark and delete it*/
 const getFavoriteID = () =>
  favorites.map(favorite => {
  if(favorite.pId === pId)
  {
      return favorite.id
  }
 })

/* Bookmarks speichern und löschen aus DB */
 const handleClick = (e) => {
  e.preventDefault();
  const favorite = {pId}; 

   if(bookmarkedCard === 0){
    setbookmarkedCard(1);
    fetch( 'http://localhost:8000/favorites/',{
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(favorite)
    })
   } 
   else{
    setbookmarkedCard(0);
    fetch( 'http://localhost:8000/favorites/' + getFavoriteID(),{
      method: 'DELETE',
    })
   }
 }


  const bookmark = <Bookmarked />
  const unbookmark = <Unbookmarked />

  return (
    <IconContext.Provider value={{ size: '14px' }}>
      <Card key={id}>
        <HeaderWrapper>
          <Title>{title}</Title>
          <BookmarkWrapper>
            <StarRating />
            <BookmarkButton
              role="button"
              aria-label="toggle-bookmark"
              onClick={handleClick}
            >
              {bookmarkedCard === 1 ? bookmark : unbookmark}
            </BookmarkButton>
          </BookmarkWrapper>
        </HeaderWrapper>
          <ImageCarousel />
        <MainWrapper>
          <DetailsWrapper>
            <Price>
              {price > 0 ? price + '€' : 'Kostenlos'} {frequency}
            </Price>
            <ProviderWrapper>
              <AiFillHome />
              <Provider>{provider}</Provider>
            </ProviderWrapper>
            <AddressWrapper>
              <FaMapMarkerAlt />
              <Address>
                {address}, {zip} {city}
              </Address>
            </AddressWrapper>
            <DatesWrapper>
              <AiFillCalendar />
              <Dates>{dates}</Dates>
            </DatesWrapper>
          </DetailsWrapper>
          <DropdownForm />
          <DescriptionWrapper>
            <DescriptionTitle>Beschreibung</DescriptionTitle>
            <Description>{description}</Description>
          </DescriptionWrapper>
          <RatingWrapper>
            <Review title={title} onSubmitReview={handleReview} />
            <Reviews>
              {reviewCards.map(card => (
                <ReviewCard
                  title={card.title}
                  details={card.details}
                  rating={card.rating}
                />
              ))}
            </Reviews>
          </RatingWrapper>
          <ProviderContainer>
            <ProviderTitle>Anbieter</ProviderTitle>
            <ProviderCard>
              <ProviderImage src={Logo} alt="" width="50px" height="auto" />
              <ProviderName>{provider}</ProviderName>
            </ProviderCard>
          </ProviderContainer>
        </MainWrapper>
      </Card>
    </IconContext.Provider>
  )

  function bookmarkCard(currentId) {
    let newArray

    if (bookmarkedCard.includes(currentId)) {
      newArray = bookmarkedCard.filter(id => id !== currentId)
    } else {
      newArray = [...bookmarkedCard, currentId]
    }

    setbookmarkedCard(newArray)
    console.log(newArray)
  }

  function handleReview(newCard) {
    setreviewCards([newCard, ...reviewCards])
  }
}

const Card = styled.div`
`

const HeaderWrapper = styled.section`
  display: grid;
  gap: 5px;
  padding: 10px 5px 5px;
  background-color: #eee;
`
const Title = styled.h2`
  font-size: 14px;
  margin: 0;
`
const BookmarkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`


const Unbookmarked = styled(AiOutlinePlusSquare)`
  height: 30px;
  width: 30px;
`

const Bookmarked = styled(AiFillPlusSquare)`
  height: 30px;
  width: 30px;
`

const BookmarkButton = styled.button`
  border: none;
  padding: 0;
  margin: 0;
`

const MainWrapper = styled.main`
  padding: 10px 5px;
  display: grid;
  gap: 30px;
`

const Price = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 5px;
`

const DetailsWrapper = styled.div`
  display: grid;
  gap: 5px;
`

const ProviderWrapper = styled.div`
  display: flex;
  gap: 5px;
`

const Provider = styled.div`
  font-size: 12px;
  padding-top: 2px;
`

const AddressWrapper = styled.div`
  display: flex;
  gap: 5px;
`

const Address = styled.div`
  font-size: 12px;
  padding-top: 2px;
`

const DatesWrapper = styled.div`
  display: flex;
  gap: 5px;
`

const Dates = styled.div`
  font-size: 12px;
  padding-top: 2px;
`

const DescriptionWrapper = styled.section`
  padding: 20px 10px;
  display: grid;
  gap: 10px;
`

const DescriptionTitle = styled.h3`
  font-size: 14px;
  margin: 0;
`

const Description = styled.p`
  font-size: 12px;
  line-height: 1.3em;
  margin: 0;
`

const RatingWrapper = styled.section`
  display: grid;
  gap: 30px;
  padding: 0 10px;
`

const Reviews = styled.div``

const ProviderContainer = styled.section`
  display: grid;
  gap: 10px;
  padding: 0 10px;
`

const ProviderTitle = styled.h3`
  font-size: 14px;
  margin: 0;
`

const ProviderCard = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  border: 0.5px solid grey;
`

const ProviderImage = styled.img`
  width: 50px;
  height: auto;
  border-radius: 100px;
`

const ProviderName = styled.h5`
  font-size: 12px;
  margin: 0;
  line-height: 1.3em;
`
