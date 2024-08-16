import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import { products } from '../model/index.js'

const productsRouter = express.Router()
productsRouter.use(bodyParser.json())

productsRouter.get('/', (req, res) => {
    products.fetchProducts(req, res)
})

productsRouter.get('/:id', (req, res) => {
    products.fetchProducts(req, res)
})