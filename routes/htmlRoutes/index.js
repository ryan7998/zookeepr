const path = require('path');
const router = require('express').Router();

// HTML routing:

// route got index.html
router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// route for animals.html
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

// route for zookeepers.html
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

module.exports = router;