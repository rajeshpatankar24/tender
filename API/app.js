import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import expressFileupload from 'express-fileupload';
// import { configDotenv } from 'dotenv';
dotenv.config()
const app = express();
// to link route
import userRouter from './router/user.router.js';
import categoryRouter from './router/category.router.js';
import subcategoryRouter from './router/subCategory.router.js'
import productRouter from './router/product.router.js';
import bidRouter from './router/bid.router.js'
// import newsletterModel from './model/newsletter.model.js';
// import contactRouter from './model/contact.model.js'

// for crose origin ( different port handle)
app.use(cors());
// route level middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressFileupload());
// route
app.use('/user',userRouter);
app.use('/category',categoryRouter);
app.use("/subcategory",subcategoryRouter);
app.use("/product",productRouter);
app.use("/bid",bidRouter);
// app.use('/newsletter', newsletterModel);
// app.use('/contact', contactRouter);

const PORT= process.env.PORT
app.listen(PORT);
console.log("Server invoked at :",PORT);


