var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};


// Our product database.
fetch("http://localhost:5000/api/admin/products", requestOptions)
  .then(response => response.text())
  .then(result => sampleProducts = JSON.parse(result).massege)
  .catch(error => console.log('error', error));
let sampleProducts = [];
fetch("http://localhost:5000/api/admin/categories", requestOptions)
  .then(response => response.text())
  .then(result => categories = JSON.parse(result).massege.map(x=>x={name:x.name}))
  .catch(error => console.log('error', error));
// List of item categories.
let categories = [
  {
    name: "All categories"
  }
];

// Data for rendering menu.
const dataForTheMenu = [
  { name: "Home page", url: "/", icon: "home", id: 0 },
  {
    name: "Product categories",
    id: 1,
    children: categories.map((x, i) => {
      return {
        name: x.name,
        id: 2 + i,
        url: "/?category=" + x.name
      };
    })
  },

];


export { sampleProducts, categories, dataForTheMenu };
