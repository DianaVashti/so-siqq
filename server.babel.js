import express from 'express';
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const path = require('path')



const app = express();

app.use('/', express.static('public'));

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(process.env.PORT || 3000);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json({error:err.stack})
})

module.exports = app
