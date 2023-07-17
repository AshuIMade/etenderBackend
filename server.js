const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { errorHandler } = require('./middleware/errorHandler');
const app = express();

var corOptions = {
    origin: 'http://localhost:2929',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
};
//middelwares
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.urlencoded({ extended: false }));

//routes
const userRouter = require('./routes/userRouter');
app.use('/api/v1/users', userRouter);

const vendorRouter = require('./routes/vendorRouter');
app.use('/api/v1/vendors', vendorRouter);

const tenderRouter = require('./routes/tenderRouter');
app.use('/api/v1/tenders', tenderRouter);

const gradeRouter = require('./routes/gradeRouter');
app.use('/api/v1/grades', gradeRouter);

const bidRouter = require('./routes/bidRouter');
app.use('/api/v1/bids', bidRouter);
//error handler middleware
app.use(errorHandler);
//testing app api
//app.get('/', (req, res) => { 
  //  res.json({ message: 'hello from api' });
//});
// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}


//port
const PORT = process.env.PORT || 4649;
//server
app.listen(PORT, () => { 
    console.log(`server is running on port ${PORT}`);
});
