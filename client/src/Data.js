// Our product database.
const sampleProducts = [
  {
    id: '1',
    name: "Deer tartare with rowanberry",
    category: "Winter Appetizers",
    price: 6500,
    description:
      "",
    popular: false,
    imageUrls: [
      ""
    ]
  },
  {
    id: '2',
    name: "Beef carpaccio with boletus mayonnaise",
    category: "Winter Appetizers",
    price: 5400,
    description:
      "",

    popular: true,
    imageUrls: [
      ""
    ]
  },
  {
    id: '3',
    name: "Smoked eel with beetroot",
    category: "Winter Appetizers",
    price: 6200,

    popular: false,
    imageUrls: [
      ""
    ]
  },
  {
    id: '4',
    name: "Trout with crayfish and roast celery ",
    category: "Main Dishes",
    price: 8900,
    description:
      "",
    popular: false,
    imageUrls: [
      ""
    ]
  },
  {
    id: '5',
    name: "Halibut with black rice and vinaigrette sauce",
    category: "Main Dishes",
    price: 95,
    description:
      "",

    popular: false,
    imageUrls: [
      ""
    ]
  },
  {
    id: '7',
    name: "Quail with morels",
    category: "Main Dishes",
    price: 9200,
    description: "",
    popular: false,
    imageUrls: [
      ""
    ]
  },
  {
    id: '8',
    name: "Ribeye  Steak",
    category: "Special Steaks Selection",
    price: 17500,
    description: "",
    popular: false,
    imageUrls: [
      ""
    ]
  },
  {
    id: '9',
    name: "Potato puree served with chanterelles and chive",
    category: "Additives",
    price: 1800,
    description: "",
    popular: false,
    imageUrls: [
      ""
    ]
  },
  {
    id: '10',
    name: "Baked vegetables with buckwheat honey",
    category: "Additives",
    price: 1700,
    description: "",
    popular: false,
    imageUrls: [
      ""
    ]
  },
  {
    id: '11',
    name: "Cheesecake with seaberry",
    category: "Desserts",
    price: 2900,
    description:
      "",
    popular: false,
    imageUrls: [
      ""
    ]
  },
  {
    id: '12',
    name: "Plums with Sabayone cream",
    category: "Desserts",
    price: 2700,
    description:
      "",

    popular: false,
    imageUrls: [
      ""
    ]
  }
];

// List of item categories.
const categories = [
  {
    name: "All categories"
  },
  {
    name: "Winter Appetizers"
  },
  {
    name: "Main Dishes"
  },
  {
    name: "Special Steaks Selection"
  },
  {
    name: "Additives"
  },
  {
    name: "Desserts"
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
