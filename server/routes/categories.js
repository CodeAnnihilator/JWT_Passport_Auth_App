import express from 'express'

import categories from '../models/categories.js'

const categoriesRouter = express.Router()

categoriesRouter.get('/categories', (req, res) => {
  res.status(200).send({ categories })
})

export default categoriesRouter
