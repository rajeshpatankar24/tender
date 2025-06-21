import express from 'express'

const router = express.Router();
import * as UserController from '../controller/user.controller.js';
// redirect to user controller
router.post('/save',UserController.save);
router.post('/login',UserController.login);
router.get('/fetch',UserController.fetch);
router.patch('/update',UserController.updateData);
router.delete('/delete',UserController.deleteUser)


export default router;
