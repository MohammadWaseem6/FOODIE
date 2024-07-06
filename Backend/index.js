import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { register, login, Logout, order } from "./User/User.model.js"
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/register', register);
app.post('/login', login);
app.post('/logout', Logout);
app.post('/order', order);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
