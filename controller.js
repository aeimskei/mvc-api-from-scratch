const model = require('./model')

const getAllDesigners = (req, res, next) => {
  const designers = model.allDesigners()
  res.status(200).json({data: designers})
}

module.exports = {
  getAllDesigners
}