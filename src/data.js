export const CategoryEnum = {
  CATEGORY_1: "Calendar",
  CATEGORY_2: "Who done it?",
  CATEGORY_3: "Miracles",
  CATEGORY_4: "Gospel",
  CATEGORY_5: "Revelation",
};

export const Teams = {
  Alpha: "A",
  Omega: "Ω",
};

const questionsAndAnswers = [
  {
    question:
      "What is the Jewish day of rest from Friday evening to Saturday evening?",
    answer: "Sabbath",
    points: 100,
    used: true,
    audio: "c1p1",
    category: CategoryEnum.CATEGORY_1,
  },
  {
    question: "On what day of the week did Jesus rise from the dead?",
    answer: "Sunday",
    points: 200,
    used: true,
    audio: "c1p2",
    category: CategoryEnum.CATEGORY_1,
  },
  {
    question: "This biblical event is commemorated on Good Friday.",
    answer: "crucifixion",
    points: 300,
    used: true,
    audio: "c1p3",
    category: CategoryEnum.CATEGORY_1,
  },
  {
    question:
      "Festival that commemorates the Israelites' liberation from slavery in Egypt.",
    answer: "Passover",
    points: 400,
    used: true,
    audio: "c1p4",
    category: CategoryEnum.CATEGORY_1,
  },
  {
    question:
      "Festival marks the beginning of the harvest and giving of the law to Moses.",
    answer: "Pentecost",
    points: 500,
    used: true,
    audio: "c1p5",
    category: CategoryEnum.CATEGORY_1,
  },

  // Add more questions and answers for other categories
  {
    question: "Who was sold into slavery by his brothers?",
    answer: "Joseph",
    points: 100,
    used: true,
    audio: "c2p1",
    category: CategoryEnum.CATEGORY_2,
  },
  {
    question:
      "Who brought down a Philistine temple, killing both himself and his captors?",
    answer: "Samson",
    points: 200,
    used: true,
    audio: "c2p2",
    category: CategoryEnum.CATEGORY_2,
  },
  {
    question: "Who is known for striking a rock to bring forth water?",
    answer: "Moses",
    points: 300,
    used: true,
    audio: "c2p3",
    category: CategoryEnum.CATEGORY_2,
  },
  {
    question:
      "Who, as a prophet and judge of Israel, anointed both Saul and David as kings?",
    answer: "Samuel",
    points: 400,
    used: true,
    audio: "c2p4",
    category: CategoryEnum.CATEGORY_2,
  },
  {
    question:
      "Who is known for leading a small group of men with torches and trumpets to defeat the Midianites?",
    answer: "Gideon",
    points: 500,
    used: true,
    audio: "c2p5",
    category: CategoryEnum.CATEGORY_2,
  },
  // Questions and answers for Category 3
  {
    question: "Who walked on water alongside Jesus?",
    answer: "Peter",
    points: 100,
    used: true,
    audio: "c3p1",
    category: CategoryEnum.CATEGORY_3,
  },
  {
    question: "Jesus's first miracle was turning?",
    answer: "water to wine",
    points: 200,
    used: true,
    audio: "c3p2",
    category: CategoryEnum.CATEGORY_3,
  },
  {
    question:
      "In what city was a paralyzed man was lowered through a roof to be healed by Jesus?",
    answer: "Capernaum",
    points: 300,
    used: true,
    audio: "c3p3",
    category: CategoryEnum.CATEGORY_3,
  },
  {
    question:
      "This prophet called upon God to send fire from heaven to consume a water-soaked sacrifice.",
    answer: "Elijah",
    points: 400,
    used: true,
    audio: "c3p4",
    category: CategoryEnum.CATEGORY_3,
  },
  {
    question: "What prophet caused the Jordan River to stop flowing?",
    answer: "Elisha",
    points: 500,
    used: true,
    dailyDouble: true,
    audio: "c3p5",
    category: CategoryEnum.CATEGORY_3,
  },

  // Questions and answers for Category 4
  {
    question: "What was the last thing that Jesus uttered?",
    answer: "It is finished",
    points: 100,
    used: true,
    audio: "c4p1",
    category: CategoryEnum.CATEGORY_4,
  },
  {
    question: "What was written on the sign placed on Jesus's cross?",
    answer: "Jesus of Nazareth  King of the Jews",
    points: 200,
    used: true,
    audio: "c4p2",
    category: CategoryEnum.CATEGORY_4,
  },
  {
    question: "Who was the first to see Jesus after his resurrection?",
    answer: "Mary Magdalene",
    points: 300,
    used: true,
    audio: "c4p3",
    category: CategoryEnum.CATEGORY_4,
  },
  {
    question:
      "On which hill was Jesus crucified, also known as the 'Place of the Skull'?",
    answer: "Golgotha",
    points: 400,
    used: true,
    audio: "c4p4",
    category: CategoryEnum.CATEGORY_4,
  },
  {
    question:
      "Who was the criminal released instead of Jesus by Pontius Pilate?",
    answer: "Barabbas",
    points: 500,
    used: true,
    audio: "c4p5",
    category: CategoryEnum.CATEGORY_4,
  },

  // Questions and answers for Category 5
  {
    question: "The number of the beast.",
    answer: "666",
    points: 100,
    used: true,
    audio: "c5p1",
    category: CategoryEnum.CATEGORY_5,
  },
  {
    question: "How many seals are opened?",
    answer: "7",
    points: 200,
    used: true,
    audio: "c5p2",
    category: CategoryEnum.CATEGORY_5,
  },
  {
    question: "Creatures with 'eyes all around, even under its wings.'",
    answer: "cherubim",
    points: 300,
    used: true,
    audio: "c5p3",
    category: CategoryEnum.CATEGORY_5,
  },
  {
    question:
      "Which color of the Four Horsemen of the Apocalypse is associated with famine?",
    answer: "black",
    points: 400,
    used: true,
    audio: "c5p4",
    category: CategoryEnum.CATEGORY_5,
  },
  {
    question:
      "What entities are thrown into the lake of fire at the end of time?",
    answer: "death and hades",
    points: 500,
    used: true,
    audio: "c15p5",
    category: CategoryEnum.CATEGORY_5,
  },
];

const questionsAndAnswersWithIds = questionsAndAnswers.map((qa, index) => ({
  ...qa,
  id: index + 1,
}));

export { questionsAndAnswersWithIds };
