import { render, screen } from '@testing-library/react'
import MiniCard from './MiniCard'

import testImage from '../material/images/fussball/fussballImage1.png'

const testdata = {
  image: { testImage },
  altText: 'testAltText',
  title: 'testTitle',
  stars: 5,
  price: 1,
  frequency: 'monthly',
  zip: '12345',
  city: 'testCity',
  dates: '21.21.2021',
}

describe('MiniCard', () => {
  it('renders image and altText', () => {
    render(<MiniCard {...testdata} />)
    expect(screen.getByAltText('testAltText')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
  it('renders zip, city and price', () => {
    render(<MiniCard {...testdata} />)
    expect(screen.getByText(/12345/)).toBeInTheDocument()
    expect(screen.getByText(/testCity/i)).toBeInTheDocument()
    expect(screen.getByText(/5/)).toBeInTheDocument()
  })
  it('renders the children prop', () => {
    const { container } = render(<MiniCard {...testdata} />)
    expect(container).toHaveTextContent('testTitle')
    expect(container).toHaveTextContent('monthly')
    expect(container).toHaveTextContent('21.21.2021')
  })
  it.todo('renders stars when rating changes')
})
