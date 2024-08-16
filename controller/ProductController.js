import express from 'express'
import { verifyAToken } from '../middleware/AuthenticateUser.js'
import bodyParser from 'body-parser'
import { products } from '../model/index.js'

const productRouter = express.Router()

productRouter.use(bodyParser.json())

productRouter.get('/', verifyAToken, (req, res) => {
    products.fetchProducts(req, res)
})

productRouter.get('/recent', (req, res) => {
    products.fetchProduct(req, res)
})

productRouter.get('/:id', verifyAToken ,(req, res) => {
    products.updateProduct(req, res)
})

productRouter.post('/add', verifyAToken, (req, res) => {
    products.addProduct(req, res)
})

productRouter.patch('/:id', verifyAToken, (req, res) => {
    products.updateProduct(req, res)
})

productRouter.delete('/:id', verifyAToken, (req, res) => {
    products.deleteProduct(req, res)
})

export {
    productRouter
}