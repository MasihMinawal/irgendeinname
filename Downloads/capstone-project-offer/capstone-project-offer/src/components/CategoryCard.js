import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function CategoryCard({ id, icon, title, altText }) {
  return (
    <Card key={id}>
      <Wrapper>
        <Icon src={icon} alt={altText} />
        <Category>{title}</Category>
      </Wrapper>
    </Card>
  )
}

CategoryCard.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.string,
  altText: PropTypes.string,
  title: PropTypes.string,
}

const Card = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 150px;
  width: 150px;
  background-color: #eee;
  color: #000;
  text-decoration: none;
  border: 0;
`

const Icon = styled.img`
  width: 40px;
  height: auto;
`

const Wrapper = styled.div`
  display: block;
  text-align: center;
`

const Category = styled.h2`
  font-size: 14px;
  margin-bottom: 0;
`
