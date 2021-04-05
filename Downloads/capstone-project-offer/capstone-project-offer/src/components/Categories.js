import styled from 'styled-components/macro'
import CategoryCard from './CategoryCard'
import { categories } from '../material/data/data.json'

export default function Categories() {

  return (
    <CategoriesWrapper>
      {categories.map(category => (
        <CategoryCard
          id={category.id}
          title={category.title}
          icon={require(`../material/icons/${category.icon}`).default}
          altText={category.altText}
        />
      ))}
    </CategoriesWrapper>
  )
}

const CategoriesWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 5px;
`
