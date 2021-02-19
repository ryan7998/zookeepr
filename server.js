// apiRoutes and htmlRoutes require function will read index.js
// in each folder
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// MIDDLE WARE:
// serve static assets:
app.use(express.static('public'));
// parse incoming string or array data:
app.use(express.urlencoded({extended:true}));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



// listening:
app.listen(PORT, ()=>{
    console.log(`API server now on port 3001`);
});
