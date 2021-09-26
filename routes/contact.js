const express = require('express');

const router = express.Router();

// @route GET api/contact
// @desc  GET all users contact
// @access Private

router.get('/', (req, res) => {
  res.send('Get All Contact');
});

// @route POST api/contact
// @desc Add new contact
// @access Private
router.post('/', (req, res) => {
  res.send('Register a user');
});

// @route PUT api/contact/:id
// @desc Update contact
// @access Private
router.put('/:id', (req, res) => {
  res.send('Update a contact');
});

// @route DELETE api/contact/:id
// @desc Delete contact
// @access Private
router.delete('/:id', (req, res) => {
  res.send('Delete a contact');
});

module.exports = router;
