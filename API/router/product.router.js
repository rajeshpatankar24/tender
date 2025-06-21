import express from 'express'

const router = express.Router();
import * as ProductController from "../controller/product.controller.js"
// redirect to product controller
router.post('/save',ProductController.save);
router.get('/fetch',ProductController.fetch);
// router.patch('/update',ProductController.updateData);
// router.delete('/delete',ProductController.deleteData);

export default router;
