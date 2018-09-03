
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

//mongoose.connect('mongodb://localhost:27017/Shops');
const connection = mongoose.connection;

router.route('/hello').get((req, res) => {

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ a: 1 }, null, 3));
    
});


connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));