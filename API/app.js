import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import expressFileupload from 'express-fileupload';
import { configDotenv } from 'dotenv';
const app = express();
// to link route
import userRouter from './router/user.router.js';
import categoryRouter from './router/category.router.js';
import subcategoryRouter from './router/subCategory.router.js'
import productRouter from './router/product.router.js';
import bidRouter from './router/bid.router.js'
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

const PORT= process.env.PORT || 5001
app.listen(PORT);
console.log("Server invoked at link http://localhost:",PORT);


