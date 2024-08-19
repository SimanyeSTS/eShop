import express from 'express'; // Make sure to import express properly
import cors from 'cors';
import path from 'path';
import { userRouter } from './controller/UserController.js';
import { productRouter } from './controller/ProductController.js';

// Create an express app
const app = express();
const port = +process.env.PORT || 4000;

// CORS middleware - Should be placed before any route handling
app.use(cors({
    origin: '*', // Allow all origins, modify as necessary
    credentials: true, // If you need to include credentials like cookies, set this to true
    methods: '*', // Allow all HTTP methods
    allowedHeaders: '*', // Allow all headers, modify as necessary
    exposedHeaders: ['Authorization'], // Specify any headers you want to expose
}));

// Other middlewares
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Static file serving middleware
app.use(express.static('./static'));

// Route handlers
app.use('/user', userRouter);
app.use('/product', productRouter);

// Serve the main HTML file on root or /eShop routes
app.get('^/$|/eShop', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'));
});

// 404 error handling for any other routes
app.get('*', (req, res) => {
    res.status(404).json({
        status: 404,
        msg: 'Resource not found'
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
