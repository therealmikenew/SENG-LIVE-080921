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

delete pikachu.abilities

// console.log(Object.values(pikachu))

const listItems = Object.values(pikachu).map(value => {
        return `<li>${value}</li>`
})

console.log(listItems)