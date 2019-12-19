const express = require('express');
const path = require('path');
const userController = require('./controllers/Users');
const exerciseController = require('./controllers/Exercises');
const friendController = require('./controllers/Friends');
const userExerciseController = require('./controllers/UserExercises');


const app = express();
const port = 5000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(function(req, res, next) {
    const arr = (req.headers.authorization || "").split(" ");
    if(arr.length > 1 && arr[1] != null){
        req.user_id = +arr[1];
    }
    next();
});


app.use(express.json());
app.use('/users', userController);
app.use('/exercises', exerciseController);
app.use('/friend', friendController);
app.use('/userexercises', userExerciseController);

app
    .use((err, req, res, next)  => {
        res.status(err.code || 500).send({ message: err.message || '' + err });
    })

app.listen(port, () => console.log(`Running on http://localhost:${port}`));