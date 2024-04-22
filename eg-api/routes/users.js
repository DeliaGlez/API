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

  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex === -1) {
    return res.status(400).json({ error: 'User not found' });
  }

  const user = users[userIndex];
  res.json(user);
});

router.put('/:id', function(req, res, next) {
  const userId = parseInt(req.params.id); 
  const userData = req.body;

  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex === -1) {
    return res.status(400).json({ error: 'User not found' });
  }

  const updatedUser = {
    id: userId,
    name: userData.name || users[userIndex].name,
    email: userData.email || users[userIndex].email,
    
  };

  users[userIndex] = updatedUser;

  res.json(updatedUser);
});

router.delete('/:id', function(req, res, next) {
  const userId = parseInt(req.params.id); 

  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex === -1) {
    return res.status(400).json({ error: 'User not found.' });
  }

  const deletedUser = users.splice(userIndex, 1);

  res.json({message: 'User deleted.'});
});

module.exports = router;
