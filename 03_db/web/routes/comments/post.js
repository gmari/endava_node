'use strict'

const comment = require('../../../models/comment')

async function addComment (req, res) {
  res.status(201).send('Added Comment Successfully!')
}

module.exports = addComment
