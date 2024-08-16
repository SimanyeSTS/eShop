import { userRouter, express } from './controller/UserController.js'
import { ProductController } from './controller/ProductController.js'
import path from 'path'

//Create an Express app
const app = express()
const port = +process.env.PORT || 4000
const router = express.Router()

//Middleware
app.use(
router,
'/user', userRouter,
'/products', productRouter,
express.static('./static'),
express.json(),
express.urlencoded({
    extended: true
})
)

//End point
router.get('^/$|/eShop', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})

//Specify anything without clear path to throw error
router.get('*', (req, res) => {
    res.json({
        status: 404,
        msg: 'Resource not found'
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})