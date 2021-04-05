import MiniCard from './MiniCard'
import testImage from '../material/icons/fussballIcon.svg'

export default {
  title: 'MiniCard',
  component: MiniCard,
}

const Template = args => <MiniCard {...args} />

export const Primary = Template.bind({})

Primary.args = {
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
