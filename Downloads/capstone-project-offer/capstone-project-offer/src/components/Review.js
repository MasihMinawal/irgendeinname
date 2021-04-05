import styled from 'styled-components/macro'

import { AiFillStar } from 'react-icons/ai'
import { useState } from 'react'

export default function Review({ title = 'Musterangebot', onSubmitReview }) {
  const [hover, setHover] = useState(null)
  const [rating, setRating] = useState(null)
  const [starColor, setStarColor] = useState()
  return (
    <ReviewForm onSubmit={handleSubmit}>
      <ReviewTitle>Bewertung</ReviewTitle>
      <ReviewText>
        Gib eine Bewertung ab zu <br />
        <i>{title}</i>
      </ReviewText>
      <RatingStars>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1
          return (
            <label>
              <RatingRadioInput
                type="radio"
                name="ratingg"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <AiFillStar
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                color={ratingValue <= (hover || rating) ? '#ffc107' : '#000'}
                size="30"
              />
            </label>
          )
        })}
      </RatingStars>
      <ReviewAuthor name="title" placeholder="Dein Name" required />
      <ReviewTextarea
        name="details"
        placeholder="Schreibe eine Bewertung"
        required
      />
      <RatingButton onClick={() => rating}>Bewerten</RatingButton>
    </ReviewForm>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { title: titleInput, details: detailsTextarea } = form.elements
    const newCard = {
      title: titleInput.value,
      details: detailsTextarea.value,
      rating: rating,
    }
    onSubmitReview(newCard)
    form.reset()
  }
}

const ReviewForm = styled.form`
  display: grid;
  gap: 10px;
`

const ReviewTitle = styled.h3`
  font-size: 14px;
  margin: 0;
`

const ReviewText = styled.p`
  font-size: 12px;
  line-height: 1.5em;
  margin: 0;
`

const RatingStars = styled.div``

const RatingRadioInput = styled.input.attrs({
  type: 'radio',
})`
  display: none;
  &:focus {
    outline: none;
  }
`

const ReviewAuthor = styled.input.attrs({
  type: 'text',
})`
  padding: 10px;
  border: 0.5px solid grey;
  font-family: sans-serif;
  font-size: 12px;
  &:focus {
    outline: 0.5px solid #000;
  }
`

const ReviewTextarea = styled.textarea.attrs({
  type: 'textarea',
})`
  height: 100px;
  border: 0.5px solid grey;
  padding: 10px;
  font-family: sans-serif;
  font-size: 12px;
  line-height: 1.5em;
  &:focus {
    outline: 0.5px solid #000;
  }
`

const RatingButton = styled.button`
  width: 80%;
  height: 50px;
  margin: 0 auto;
  border: 0 solid transparent;
  border-radius: 5px;
  background-color: black;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
`
