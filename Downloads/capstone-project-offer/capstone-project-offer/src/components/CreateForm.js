/* Bilderupload */
/* datum und zeit upload */

/* bei der buchenseite nicht mehr nach der ID die appointmentdaten ziehen, sondern nach der uuid */
/* Wenn man einen Tag hat, der offene Termine hat, jedoch die schon ausgebucht sind, wir der Tag nicht disabled */




import { useState } from 'react'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import ImageInput from './ImageInput'

export default function CreateForm({ onAddNewCard }) {
  const [dateInput, setDateInput] = useState(false)
  const [dayInput, setDayInput] = useState(false)

  return (
    <Form onSubmit={handleSubmit}>
      <Header>Erstelle ein Sportangebot</Header>
      <DataWrapper>
        <label>
          Titel
          <input name="title" placeholder="z.B. Fußball beim FC Musterverein" />
        </label>
        <label for="category">
          Sportart
          <select name="category">
            <option value="fussball">Fußball</option>
            <option value="laufen">Laufen</option>
            <option value="basketball">Basketball</option>
            <option value="fitness">Fitness</option>
          </select>
        </label>
        <label>
          Straße und Hausnummer
          <input name="address" />
        </label>
        <label>
          Postleitzahl
          <input name="zip" />
        </label>
        <label>
          Stadt
          <input name="city" />
        </label>
      </DataWrapper>
      <DatesLabel>
        Termine
        <DatesWrapper>
          <SingleDateLabel>
            Einmalig
            <SingleDateRadio
              name="returning"
              type="radio"
              value="einmalig"
              onChange={() => {
                setDateInput(true)
                setDayInput(false)
              }}
            />
          </SingleDateLabel>
          {dateInput ? (
            <Test>
              {' '}
              <input name="dates" type="date" />{' '}
              <input name="times" type="time" />{' '}
            </Test>
          ) : null}
          <MultiDatesLabel>
            <span>Regelmäßig</span>
            <MultiDatesRadio
              name="returning"
              type="radio"
              value="regelmäßig"
              onChange={() => {
                setDateInput(false)
                setDayInput(true)
              }}
            />
          </MultiDatesLabel>
          {dayInput ? (
            <DayContainer>
              <DayLabel>
                Montag
                <input name="dates" type="checkbox" value="monday" />
              </DayLabel>
              <DayLabel>
                Dienstag
                <input name="dates" type="checkbox" value="tuesday" />
              </DayLabel>
              <DayLabel>
                Mittwoch
                <input name="dates" type="checkbox" value="wendnesday" />
              </DayLabel>
              <DayLabel>
                Donnerstag
                <input name="dates" type="checkbox" value="thursday" />
              </DayLabel>
              <DayLabel>
                Freitag
                <input name="dates" type="checkbox" value="friday" />
              </DayLabel>
              <DayLabel>
                Samstag
                <input name="dates" type="checkbox" value="saturday" />
              </DayLabel>
              <DayLabel>
                Sonntag
                <input name="dates" type="checkbox" value="sunday" />
              </DayLabel>
            </DayContainer>
          ) : null}
        </DatesWrapper>
      </DatesLabel>
      <DescriptionWrapper>
        <DescriptionLabel>
          Beschreibung
          <Description
            name="description"
            placeholder="Schreibe eine Beschreibung zu deinem Angebot"
          />
        </DescriptionLabel>
      </DescriptionWrapper>
      <PriceWrapper>
        <label>
          Preis
          <InputSymbol>
            <PriceInput
              placeholder="z.B. 10"
              name="price"
              type="number"
              step="0.01"
              min="0"
            />
          </InputSymbol>
        </label>
        <label for="frequency">
          <FrequencySelect name="frequency">
            <option value="einmalig">einmalig</option>
            <option value="täglich">täglich</option>
            <option value="wöchentlich">wöchentlich</option>
            <option value="monatlich">monatlich</option>
            <option value="jährlich">jährlich</option>
          </FrequencySelect>
        </label>
      </PriceWrapper>
      <SubmitButton text="add"> Hinzufügen </SubmitButton>
    </Form>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const {
      title,
      category,
      address,
      zip,
      city,
      dates,
      description,
      avatarURL,
      price,
      frequency,
      returning,
      times,
    } = form.elements
    const uuid = uuidv4()
    const uploadProduct = {
      uuid: uuid,
      title: title.value,
      category: category.value,
      address: address.value,
      zip: zip.value,
      city: city.value,
      description: description.value,
      price: price.value,
      image : avatarURL.value,
    }

    const uploadOeffnungszeiten = {
      uuid: uuid,
      dates: dates.value,
      frequency: frequency.value,
      returning: returning.value,
      times: times.value,
    }

    fetch('http://localhost:8000/products/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(uploadProduct),
    })

    fetch('http://localhost:8000/oeffnungszeiten/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(uploadOeffnungszeiten),
    })

    form.reset()
  }
}

const Header = styled.p`
  font-size: 14px;
  margin: 0;
`

const Form = styled.form`
  display: grid;
  gap: 20px;
  padding: 10px;
  h2 {
    font-size: 16px;
    margin: 25px 0 0 0;
    color: grey;
  }
  h3 {
    font-size: 12px;
    margin: 0;
  }
  label {
    font-size: 12px;
    font-weight: 600;
  }
  input {
    padding: 10px 5px;
    border: 0.5px solid grey;
    width: 100%;
    margin: 0;
    color: #000;
    outline: none;
  }
  select {
    border: 0.5px solid grey;
    width: 100%;
    height: 35px;
    font-size: 14px;
    outline: none;
  }
`

const DataWrapper = styled.section`
  display: grid;
  gap: 10px;
`

const DatesWrapper = styled.section`
  display: grid;
  gap: 20px;
`

const DatesLabel = styled.label`
  display: grid;
  gap: 10px;
`

const SingleDateLabel = styled.label`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  font-weight: 400 !important;
`

const SingleDateRadio = styled.input``

const MultiDatesLabel = styled.label`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  font-weight: 400 !important;
`

const MultiDatesRadio = styled.input``

const DayLabel = styled.label`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  font-weight: 400 !important;
`

const DayContainer = styled.div`
  display: grid;
  gap: 20px;
`

const DescriptionLabel = styled.label`
  display: grid;
`

const DescriptionWrapper = styled.section``

const Description = styled.textarea`
  height: 100px;
  padding: 10px 5px;
  outline: none;
  font-family: sans-serif;
  font-size: 12px;
  border: 0.5px solid gray;
`

const PriceWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  align-items: end;
`

const InputSymbol = styled.span`
  position: relative;
  &:after {
    position: absolute;
    top: 0;
    content: '€';
    left: 5px;
    font-weight: 400;
  }
`

const PriceInput = styled.input`
  padding-left: 20px !important;
`

const FrequencySelect = styled.select``

const SubmitButton = styled.button`
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

const Test = styled.div`
  display: flex;
  gap: 10px;
`
