import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import UserRoutes from './Routes/UserRoutes.js';
const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use('/api', UserRoutes);

const startServer = async () => {
	try {
		app.listen(PORT, () => {
			console.log(`Server has been started at PORT : ${PORT}`);
		});
		await mongoose.connect(process.env.DATABASE_URL, (err, { name }) => {
			console.log(`Connection successfully. Database: ${name}`);
		});
	} catch (error) {
		console.log(error);
	}
};

startServer();
