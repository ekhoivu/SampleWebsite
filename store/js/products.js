/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "p1",
    title: "Elden Ring",
    description:
      "Rise, Tarnished, and be guided by grace to become an Elden Lord in the Lands Between.",
    price: 49.99,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "elden.jpg"
  },
  {
    id: "p2",
    title: "Bloodborne",
    description:
      "Danger, death and madness lurk around every corner of this dark and horrific world, and you must discover its darkest secrets in order to survive.",
    price: 29.99,
    discontinued: true,
    categories: ["c1"]
  },
  {
    id: "p3",
    title: "Horizon Forbidden West",
    description:
      "Join Aloy as she braves the Forbidden West, a deadly frontier that conceals mysterious new threats.",
    price: 49.99,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "horizon.jpg"
  },
  {
    id: "p4",
    title: "Horizon Zero Dawn",
    description:
      "Take on the role of skilled hunter Aloy as you explore a lush world inhabited by mysterious mechanized creatures.",
    price: 39.99,
    discontinued: true,
    categories: ["c1"]
  },
  {
    id: "p5",
    title: "Mortal Kombat 11",
    description:
      "Unprecedented control of your fighters and enjoy every skull-shattering, eye-popping moment.",
    price: 29.99,
    discontinued: true,
    categories: ["c1"]
  },
  {
    id: "p6",
    title: "Nioh 2",
    description:
      "Journey to 1555 Japan, a country gripped in endless warfare where monsters and evil spirits stalk a land of natural beauty and menacing peril.",
    price: 19.99,
    discontinued: true,
    categories: ["c1"]
  },
  {
    id: "p7",
    title: "Sekiro",
    description:
      "Explore late 1500s Sengoku Japan as you come face to face with larger than life foes in a dark and twisted world. ",
    price: 39.99,
    discontinued: true,
    categories: ["c1"]
  },
  {
    id: "p8",
    title: "The Last of Us 2",
    description:
      "Experience the escalating moral conflicts created by Ellie's relentless pursuit of vengeance.",
    price: 49.99,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "tlou2.jpg"
  },
  {
    id: "p9",
    title: "Red Dead Redemption 2",
    description: "America, 1899. Arthur Morgan and the Van der Linde gang are outlaws on the run.",
    price: 39.99,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "rdr2.jpg"
  },
  {
    id: "p10",
    title: "Assassin's Creed Valhalla",
    description:
      "Experience the escalating moral conflicts created by Ellie's relentless pursuit of vengeance. ",
    price: 39.99,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "valhalla.jpg"
  },
  {
    id: "p11",
    title: "Avengers: End Game",
    description:
      "Earth's heroes will finally understand how fragile our reality is and the sacrifices that must be made.",
    price: 39.99,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "endgame.jpg"
  },
  {
    id: "p12",
    title: "Brave",
    description:
      "Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her kingdom.",
    price: 29.99,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "brave.jpg"
  },
  {
    id: "p13",
    title: "Godzilla Vs Kong",
    description: "The fearsome Godzilla and the mighty Kong - with humanity caught in the balance.",
    price: 44.99,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "kong.jpg"
  },
  {
    id: "p14",
    title: "John Wick 3",
    description:
      "John Wick is on the run after killing a member of the international assassins' guild.",
    price: 49.99,
    discontinued: true,
    categories: ["c2"]
  },
  {
    id: "p15",
    title: "Jumanji 2",
    description:
      "The players will have to brave parts unknown from arid deserts to snowy mountains.",
    price: 44.99,
    discontinued: true,
    categories: ["c2"]
  },
  {
    id: "p16",
    title: "One Piece Stampede",
    description:
      "The world's boldest buccaneers set sail for the great Pirates Fest where the Straw Hats join a mad-dash race.",
    price: 44.99,
    discontinued: true,
    categories: ["c2"]
  },
  {
    id: "p17",
    title: "Spider-Man: No Way Home",
    description:
      "With Spider-Man's identity now revealed, Peter must discover what it truly means to be Spider-Man.",
    price: 39.99,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "nowayhome.jpg"
  },
  {
    id: "p18",
    title: "Star Wars: The Rise of Skywalker",
    description: "An epic journey to a galaxy far, far away with Star Wars: The Rise of Skywalker.",
    price: 34.99,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "skywalker.jpg"
  },
  {
    id: "p19",
    title: "Venom",
    description:
      "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth.",
    price: 29.99,
    discontinued: true,
    categories: ["c2"]
  },
  {
    id: "p20",
    title: "Zach Snyder's Justice League",
    description:
      "Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world.",
    price: 34.99,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "justiceleague.jpg"
  },
  {
    id: "p21",
    title: "Bruce Lee Ultimates The Challenger",
    description: "Bruce Lee in his iconic yellow tracksuit and comes with interchangeable parts.",
    price: 71.99,
    discontinued: true,
    categories: ["c3"]
  },
  {
    id: "p22",
    title: "Iron Man Mark 50",
    description: "Iron Man makes his return to the MAFEX figure line! He wears his Mark 50 suit.",
    price: 259.99,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "ironman.jpg"
  },
  {
    id: "p23",
    title: "Marvel Legends Doctor Strange",
    description:
      "Doctor Strange figure features multiple points of articulation and movie-inspired accessories.",
    price: 33.99,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "doctorstrange.jpg"
  },
  {
    id: "p24",
    title: "Marvel Legends Hulk",
    description:
      "The Green Goliath smashes his way into Marvel legends throughout Marvel Entertainment!",
    price: 64.99,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "hulk.jpg"
  },
  {
    id: "p25",
    title: "Marvel Legends Mystique",
    description: "Mystique figure, inspired by the character from the X-men movies.",
    price: 34.99,
    discontinued: true,
    categories: ["c3"]
  },
  {
    id: "p26",
    title: "Marvel Legends Shang-Chi",
    description: "This 6-inch scale is based on the hugely popular Shang-Chi.",
    price: 32.99,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "shangchi.jpg"
  },
  {
    id: "p27",
    title: "Marvel Legends Stan Lee",
    description: "The father of Marvel Universe. The creator of it all",
    price: 34.99,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "stanlee.jpg"
  },
  {
    id: "p28",
    title: "Marvel Legends Vision",
    description: "Vision features premium comics-inspired design, detail, and articulation. ",
    price: 33.99,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "vision.jpg"
  },
  {
    id: "p29",
    title: "Marvel Legends Wolverine",
    description:
      "This 6 inch scale, articulated figure is inspired by the character from the X-men movies.",
    price: 34.99,
    discontinued: true,
    categories: ["c3"]
  },
  {
    id: "p30",
    title: "Marvel Legends Zombie Captain America",
    description:
      "Captain America's team were the first responders to the zombie outbreak — and its first victims.",
    price: 33.99,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "zombie.jpg"
  }
];
