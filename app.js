require('dotenv').config();
require('./config/passport');
const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/userRoute');
const friendRoute = require('./routes/friendRoute');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/static', express.static('public/images'));

app.use('/users', userRoute);
app.use('/friends', friendRoute);

app.use((req, res) => {
  res.status(404).json({ message: 'resource not found on this server' });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: err.message });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server running on port ${port}`));
