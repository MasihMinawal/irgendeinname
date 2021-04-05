import CategoryCard from './CategoryCard'
import fussballIcon from '../material/icons/fussballIcon.svg'

export default {
  title: 'CategoryCard',
  component: CategoryCard,
}

const Template = args => <CategoryCard {...args} />

export const Primary = Template.bind({})

Primary.args = {
  categoryTitle: 'Fußball',
  categoryIcon: fussballIcon,
  categoryIconAltText: 'fussball',
}
