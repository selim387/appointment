const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;
const User = require('../models/users.js');

router.get('/getuser', (req, res, next) => {
  req.collection.find({})
    .toArray()
    .then(results => res.json(results))
    .catch(error => res.send(error));

});

router.post('/adduser', (req, res, next) => {
  const { client, type, note,days,Reseller } = req.body;
  if (!client || !type || !Reseller) {
    return res.status(400).json({
      message: 'fill information',
    });
  }

  const user = { client, type, note,days,Reseller };
  const newObjectId = new ObjectID();
  console.log('object id', newObjectId)
  req.collection.insertOne(User)
    .then(result => res.json(result.ops[0]))

    .catch(error => res.send(error));
});
router.post('/addreseller', (req, res, next) => {
  const { name, phone, login,country,password,region,comment } = req.body;
  if (!name || !phone || !login|| !password ) {
    return res.status(400).json({
      message: 'fill information',
    });
  }

  const reseller = { name, phone, login,country,password,region,comment };

  req.collection.insertOne(reseller)
    .then(result => res.json(result.ops[0]))


.catch(error => res.send(error));
});
router.get('/getreseller', (req, res, next) => {
  req.collection.find({})
    .toArray()
    .then(results => res.json(results))
    .catch(error => res.send(error));
});

/*router.delete('/appointments/:id', (req, res, next) => {
  const { id } = req.params;
  const _id = ObjectID(id);
  req.collection.deleteOne({ _id })
    .then(result => res.json(result))
    .catch(error => res.send(error));
});
*/

module.exports = router;
