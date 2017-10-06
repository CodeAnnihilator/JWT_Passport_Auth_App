import uniqid from 'uniqid'
import path from 'path'
import categories from './categories'

const generateProducts = (categories) => {
  let products = []
  for (let i = 0; i < categories.length; i++) {
    const numberOfProducts = Math.round(Math.random() * 20)
    const preparedProducts = new Array(numberOfProducts).fill('').map(obj => ({
      id: uniqid(),
      catId: categories[i].id,
      url: path.resolve(__dirname, '../uploadedImages/tea.png'),
      title: 'test title',
      desc: 'test desc',
      price: Math.random() * 10000
    }))
    products = products.concat(preparedProducts)
  }
  return products
}

const products = generateProducts(categories)

export default products
