import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import expressFileupload from 'express-fileupload';
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


app.listen(3001);
console.log("Server invoked at link http://localhost:3001");


