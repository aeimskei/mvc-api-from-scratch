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




module.exports = {
  allDesigners
}