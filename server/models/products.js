import uniqid from 'uniqid'
import randomWords from 'random-words'
import path from 'path'
import categories from './categories'
import sort from '../utils/sort'

const generateProducts = (categories) => {
  let products = []
  for (let i = 0; i < categories.length; i++) {
    const numberOfProducts = Math.round(Math.random() * 20)
    const preparedProducts = new Array(numberOfProducts).fill('').map(obj => ({
      id: uniqid(),
      catId: categories[i].id,
      url: path.resolve(__dirname, '../uploadedImages/tea.png'),
      title: randomWords({ min: 2, max: 5, join: ' ' }),
      desc: randomWords({ min: 20, max: 25, join: ' ' }),
      price: Math.random() * 10000
    }))
    products = products.concat(preparedProducts)
  }
  return sort(products, 'price')
}

const products = generateProducts(categories)

export default products
