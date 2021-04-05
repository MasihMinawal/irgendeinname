import styled from 'styled-components/macro'
import MiniCard from './MiniCard'
import { products } from '../material/data/data.json'
import ResultsFilter from './ResultsFilter'
import { Link } from 'react-router-dom'

export default function Results({ userInput, setUserInput }) {
  return (
    <>
      <ResultsFilter userInput={userInput} setUserInput={setUserInput} />
      <ResultsWrapper>
        {products
          .filter(product => product.city.toLowerCase().includes(userInput))
          .map(product => (
            <Link1 to={`/products/${product.id}`}>
              <MiniCard
                image={require(`../material/images/fussball/${product.image}`).default}
                altText={product.altText}
                title={product.title}
                stars={product.stars}
                price={product.price}
                frequency={product.frequency}
                zip={product.zip}
                city={product.city}
                dates={product.dates}
              />
            </Link1>
          ))}
      </ResultsWrapper>
    </>
  )
}

const ResultsWrapper = styled.section`
  display: grid;
  gap: 5px;
`
const Link1 = styled(Link)`
  text-decoration: none;
`
/*
import MiniCard from './MiniCard'
import { products } from '../material/data/data.json'

export default function Results() {
  return (
    <>
      {products.map(product => (
        <MiniCard
          image={product.image}
          altText={product.altText}
          title={product.title}
          stars={product.stars}
          price={product.price}
          frequency={product.frequency}
          zip={product.zip}
          city={product.city}
          dates={product.dates}
        />
      ))}
    </>
  )
}
*/
