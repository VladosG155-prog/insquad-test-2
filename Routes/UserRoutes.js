import { UserModel } from '../Models/User.js';
import { Router } from 'express';
import UserControler from '../Controllers/UserController.js';
const router = Router();

router.post('/users', async (req, res) => {
	UserControler.createUser(req, res);
});
router.get('/users', async (_, res) => {
	UserControler.getAllUsers(res);
});
router.delete('/users/:id', async (req, res) => {
	UserControler.deleteUserById(req, res);
});

router.patch('/users/:id', async (req, res) => {
	UserControler.updateUserById(req, res);
});

export default router;
