import express from 'express'
import * as subCategoryController from '../controller/subcat.controller.js'
const router = express.Router();


router.post('/save',subCategoryController.save);
router.get('/fetch',subCategoryController.fetch);
router.patch('/update',subCategoryController.update);
router.delete("/delete",subCategoryController.deletesub);

export default router;