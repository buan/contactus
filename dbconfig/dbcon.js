var mongoose=require('mongoose');
mongoose.connect('mongodb://admin:admin@ds153853.mlab.com:53853/users')
  .then(() =>  console.log('DB connected succesfully'))
  .catch((err) => console.error(err));

