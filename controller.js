const model = require('./model')

const getAllDesigners = (req, res, next) => {
  const designers = model.allDesigners()
  res.status(200).json({data: designers})
}

const getDesignerById = (req, res, next) => {
  const id = parseInt(req.params.id)
  const designer = model.designerById(id)

  if (!designer) return next({status: 404, message: `Could not find designer with id of ${id}`})

  res.status(200).json({data: designer})
}

module.exports = {
  getAllDesigners,
  getDesignerById
}