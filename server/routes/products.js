import express from 'express'

import products from '../models/products.js'

const productsRouter = express.Router()

productsRouter.get('/products', (req, res) => {
  res.status(200).send({
    products: products.filter(el => el.catId === JSON.parse(req.query.id))
  })
})

productsRouter.get('/product', (req, res) => {
  res.status(200).send({
    product: products.find(el => el.id === req.query.id)
  })
})

export default productsRouter
