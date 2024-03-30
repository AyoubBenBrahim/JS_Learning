const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(logger);

app.get('/hello', (req, res) => {
    // res.send('Hello World!');
    // res.json({ message: 'Hello World!' });
    // res.sendStatus(404);
    //  res.status(404).send("Page Not Foundddd");
    // res.render('index', { title: 'Hey', message: 'Hello there!'});
    res.render('index', {txt: "from /view"});
    });

const userRouter = require('./routes/users');
app.use('/users', userRouter);

function logger(req, res, next) {
    console.log('Route:', req.originalUrl);
    next();
}

app.listen(port, () => {
    console.log(`Test app listening at http://localhost:${port}`);
    }
);

