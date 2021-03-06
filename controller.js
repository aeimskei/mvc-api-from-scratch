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

const createDesigner = (req, res, next) => {
  const id = parseInt(req.params.id)
  const {name, category, country} = req.body

  if (!name || !category || !country) return next({satus: 400, message: `Name, category and country are required`})

  const designer = model.createDesigner(name, category, country)

  if (!designer) return next({status: 404, message: `Could not find with id of ${id}`})

  res.status(201).json({data: designer})
}

const updateDesigner = (req, res, next) => {
  const id = parseInt(req.params.id)
  const {name, category, country} = req.body

  if (!name || !category || !country) return next({status: 404, message: `Could not find the designer with id of ${id}`})

  const designer = model.updateDesigner(id, name, category, country)

  if (!designer) return next({status: 404, message: `Could not find the designer with id of ${id}`})

  res.status(201).json({data: designer})
}

const deleteDesigner = (req, res, next) => {
  const id = parseInt(req.params.id)
  const designer = model.deleteDesigner(id)

  if(!designer) return next({status: 404, message: `Could not find ride with id of ${id}`})

  res.status(200).json({data: designer})
}

module.exports = {
  getAllDesigners,
  getDesignerById,
  createDesigner,
  updateDesigner,
  deleteDesigner
}