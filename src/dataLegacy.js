export const CategoryEnum = {
  CATEGORY_1: "Books",
  CATEGORY_2: "Before or After?",
  CATEGORY_3: "How many?",
  CATEGORY_4: "Finish that Verse!",
  CATEGORY_5: "Genesis",
};

export const Teams = {
  Alpha: "A",
  Omega: "Ω",
};

const questionsAndAnswers = [
  {
    question: "The last book in the bible.",
    answer: "Revelation",
    points: 100,
    used: true,
    audio: "c1p1",
    category: CategoryEnum.CATEGORY_1,
  },
  {
    question: "The book after Psalm.",
    answer: "Proverbs",
    points: 200,
    used: true,
    audio: "c1p2",
    category: CategoryEnum.CATEGORY_1,
  },
  {
    question: "List the Gospel books.",
    answer: "Matthew Mark Luke John",
    points: 300,
    used: true,
    audio: "c1p3",
    category: CategoryEnum.CATEGORY_1,
  },
  {
    question: "____ of the apostles.",
    answer: "Acts",
    points: 400,
    used: true,
    audio: "c1p4",
    category: CategoryEnum.CATEGORY_1,
  },
  {
    question: "David kills Goliath in this book.",
    answer: "1 Samuel",
    points: 500,
    used: true,
    audio: "c1p5",
    category: CategoryEnum.CATEGORY_1,
  },

  // Add more questions and answers for other categories
  {
    question: "Jesus resurrected 3 days ____ he died on the cross.",
    answer: "After",
    points: 100,
    used: true,
    audio: "c2p1",
    category: CategoryEnum.CATEGORY_2,
  },
  {
    question: "The walls of Jericho came down ____ the people shouted.",
    answer: "After",
    points: 200,
    used: true,
    audio: "c2p2",
    category: CategoryEnum.CATEGORY_2,
  },
  {
    question: "Eve ate the fruit ____ Adam.",
    answer: "Before",
    points: 300,
    used: true,
    audio: "c2p3",
    category: CategoryEnum.CATEGORY_2,
  },
  {
    question: "The Last Supper happened ____ Jesus' crucifixion.",
    answer: "Before",
    points: 400,
    used: true,
    audio: "c2p4",
    category: CategoryEnum.CATEGORY_2,
  },
  {
    question: "The Tower of Babel incident occurred ____ the worldwide flood.",
    answer: "After",
    points: 500,
    used: true,
    audio: "c2p5",
    category: CategoryEnum.CATEGORY_2,
  },
  // Questions and answers for Category 3
  {
    question: "How many commandments?",
    answer: "10",
    points: 100,
    used: true,
    audio: "c3p1",
    category: CategoryEnum.CATEGORY_3,
  },
  {
    question: "How many days did God take to create the world?",
    answer: "6",
    points: 200,
    used: true,
    audio: "c3p2",
    category: CategoryEnum.CATEGORY_3,
  },
  {
    question: "How many disciples did Jesus have?",
    answer: "12",
    points: 300,
    used: true,
    audio: "c3p3",
    category: CategoryEnum.CATEGORY_3,
  },
  {
    question: "How many plagues were inflicted upon Egypt?",
    answer: "10",
    points: 400,
    used: true,
    audio: "c3p4",
    category: CategoryEnum.CATEGORY_3,
  },
  {
    question: "Jesus used 5 loaves and _ fish to feed the multitude.",
    answer: "2",
    points: 500,
    used: true,
    audio: "c3p5",
    category: CategoryEnum.CATEGORY_3,
  },

  // Questions and answers for Category 4
  {
    question: "I am the way, the truth, and the ____.",
    answer: "life",
    points: 100,
    used: true,
    audio: "c4p1",
    category: CategoryEnum.CATEGORY_4,
  },
  {
    question:"The fear of the Lord is the beginning of ____.",
    answer: "wisdom",
    points: 200,
    used: true,
    audio: "c4p2",
    category: CategoryEnum.CATEGORY_4,
  },
  {
    question: "I will be exalted among the nations, I will be exalted in the ____.",
    answer: "earth",
    points: 300,
    used: true,
    audio: "c4p3",
    category: CategoryEnum.CATEGORY_4,
  },
  {
    question: "But seek first his kingdom and his ____.",
    answer: "righteousness",
    points: 400,
    used: true,
    audio: "c4p4",
    category: CategoryEnum.CATEGORY_4,
  },
  {
    question:"The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness and ____.",
    answer: "self-control",
    points: 500,
    used: true,
    audio: "c4p5",
    category: CategoryEnum.CATEGORY_4,
  },

  // Questions and answers for Category 5
  {
    question: "In the beginning god created the ____ and the earth.",
    answer: "heavens",
    points: 100,
    used: true,
    audio: "c5p1",
    category: CategoryEnum.CATEGORY_5,
  },
  {
    question: "God called the light '___'",
    answer: "day",
    points: 200,
    used: true,
    audio: "c5p2",
    category: CategoryEnum.CATEGORY_5,
  },
  {
    question: "The ____ was more cunning than any beast of the field.",
    answer: "serpent",
    points: 300,
    used: true,
    audio: "c5p3",
    category: CategoryEnum.CATEGORY_5,
  },
  {
    question:"They sewed ____ leaves to cover themselves.",
    answer: "fig",
    points: 400,
    used: true,
    audio: "c5p4",
    category: CategoryEnum.CATEGORY_5,
  },
  {
    question: "God removed Adam and Eve from the garden so they would not eat from the ____.",
    answer: "tree of life",
    points: 500,
    dailyDouble: true,
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
