const express=require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const controller = require('../controllers/controller');


router.get('/', (req, res) => {
    console.log("Hello we are on home page");
    res.json(202);
});

router.get('/fetch-data', controller.fetchTasks);
router.post('/add-task', controller.addTask);


module.exports = router;
