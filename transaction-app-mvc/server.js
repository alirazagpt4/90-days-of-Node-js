const express = require('express');
const app = express();
const PORT  = 5000;
const   connectDB  = require('./config/db');
const morgan = require('morgan');

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


app.use('/api/user', require('./routes/user.routes'));
app.use('/api/transaction', require('./routes/transaction.routes'));

app.get('/', (req, res) => {
    res.json('Welcome to the Transaction App');
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});