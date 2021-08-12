const pikachu = {
  name: "Pikachu",
  img: "www.img.com",
  likes: 0,
  abilities: [
    {
      name: "static",
    },
    {
      name: "lightning-rod",
    },
  ],
};

// console.log(Object.values(pikachu))

const listItems = Object.values(pikachu).map(value => {
    if (!Array.isArray(value)){
        return `<li>${value}</li>`
    } else {
        return value.map(v => `<li>${Object.values(v)[0]}</li>`)
    }
})

console.log(listItems.flat(1))