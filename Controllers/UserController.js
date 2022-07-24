import { UserModel } from '../Models/User.js';
class UserControler {
	async getAllUsers(res) {
		try {
			const response = await UserModel.find({});
			console.log(response);
			res.send(response);
		} catch (error) {
			res.status(402).send({ message: 'Что-то пошло не так' });
		}
	}
	async createUser(req, res) {
		try {
			const obj = req.body;
			const user = new UserModel(obj);
			await user.save();
			res.send(user);
		} catch (error) {
			res.status(402).send({ message: 'Что-то пошло не так' });
		}
	}
	async updateUserById(req, res) {
		try {
			const id = req.params.id;
			const data = req.body;
			const response = await UserModel.findOneAndUpdate({ _id: id }, data);
			res.send(response);
		} catch (error) {
			res.status(402).send({ message: 'Что-то пошло не так' });
		}
	}
	async deleteUserById(req, res) {
		try {
			const id = req.params.id;
			const response = await UserModel.findOneAndDelete({ _id: id });
			res.send(response);
		} catch (error) {
			res.status(402).send({ message: 'Что-то пошло не так' });
		}
	}
}
export default new UserControler();
