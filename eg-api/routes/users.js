var express = require('express');
var router = express.Router();

var users=[
  {
    id:1,
    name:'John',
    email: '<EMAIL>'
  },
  {
    id:2,
    name:'Jane',
    email: '<EMAIL>'
  }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.post('/', function(req, res, next) {
  var user = req.body;
  users.push(user);
  res.json(user);

});
router.get('/:id', function(req, res, next) {
  const userId = parseInt(req.params.id); 

  const userIndex = users.indIndex(user => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  const user = users[userIndex];
  res.json(user);
});
router.put('/', function(req, res, next) {
  
});

router.delete('/', function(req, res, next) {
  
});

module.exports = router;
