// server.js
import express from 'express';
import dotenv from 'dotenv';
import 'babel-polyfill';
import cors from 'cors';
import UserWithDb from './src/usingDB/controller/Users';
import Auth from './src/usingDB/middleware/Auth';

dotenv.config();
const app = express()
app.options('/api/v1/users/', cors());

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
});

app.post('/api/v1/users', cors(), UserWithDb.create);
app.post('/api/v1/users/login', cors(), UserWithDb.login);


app.listen(3000)
console.log('app running on port ', 3000);