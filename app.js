const express = require('express');
//const mongoose = require('mongoose')
const port = 3000;
const app = express();
var createError = require('http-errors'); //Http error
var userRouter = require('./routes/user'); //calling on routes

app.use('/user', userRouter);//use users router

app.set('view engine','ejs');

//mongoose.connect('mongodb://localhost/MTU')

//app.use(express.urlencoded({ extended: false }));



app.use('/', userRouter);
var user =  require("./routes/user");

app.use(express.static("public"));


app.get('/', (req,res) => {
  const user = [{
    title: "Create a new Booking",
    createdAt: new Date(),
    description: 'Booking'
  },
  {
    title: "Create a new Booking2",
    createdAt: new Date(),
    description: 'Booking'
  }]
  res.render('partials/index',{user: user} )
    
})


//app.set('views', path.join(__dirname, 'views')); //views is the folder where we have our web pages. dirname holds the directory name

//middleware
//app.use(logger('dev'));
//app.use(express.json());

//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));



//404 error
app.use(function(req, res, next) {
    next(createError(404));
  });

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    //   error page
    res.status(err.status || 500);
    res.render('pages/error');
  });

//show connections
app.listen(port, () =>{
    console.log("App listening on port "+ port);
});





