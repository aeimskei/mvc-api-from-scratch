const designers = [
  {
    id: 1,
    name: 'Charles and Ray Eames',
    category: 'Architecture and Furniture',
    country: 'America'
  },
  {
    id: 2,
    name: 'Herb Lubalin',
    category: 'Graphic Designer and Typographer',
    country: 'America'
  },
  {
    id: 3,
    name: 'Paul Rand',
    category: 'Graphic Designer',
    country: 'America'
  },
  {
    id: 4,
    name: 'Saul Bass',
    category: 'Graphic and Motion Designer',
    country: 'America'
  },
  {
    id: 5,
    name: 'Erik Spiekermann',
    category: 'Graphic Designer and Typographer',
    country: 'Germany'
  },
  {
    id: 6,
    name: 'Dieter Rams',
    category: 'Industrial Designer',
    country: 'Germany'
  }
]

function allDesigners() {
  return designers;
}
// TEST: http GET localhost:3000/designers

function designerById(id) {
  const designer = designers.find(designer => designer.id === id)
  return designer;
}
// TEST: http GET localhost:3000/designers/1

function createDesigner(name, category, country) {
  const nextID = designers.length + 1
  const newDesigner = {id: nextID, name, category, country}
  
  designers.push(newDesigner)
  return newDesigner;
}
// TEST: http POST localhost:3000/designers name="Coke" category="Brand" country="America"

function updateDesigner(id, name, category, country) {
  const designer = designerById(id)

  designer.name = name
  designer.category = category
  designer.country = country

  return designer;
}
// http PUT localhost:3000/designers/6 name="Pepsi" category="Brand" country="America"

module.exports = {
  allDesigners,
  designerById,
  createDesigner,
  updateDesigner
}