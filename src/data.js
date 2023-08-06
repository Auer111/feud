export const CategoryEnum = {
  CATEGORY_1: "Category 1",
  CATEGORY_2: "Category number two",
  CATEGORY_3: "Category 3",
  CATEGORY_4: "Category 4",
  CATEGORY_5: "Category 5",
};

const questionsAndAnswers = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
    points: 100,
    used: false,
    category: CategoryEnum.CATEGORY_1,
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
    points: 200,
    used: false,
    category: CategoryEnum.CATEGORY_1,
  },
  {
    question: "Which famous scientist developed the theory of relativity?",
    answer: "Albert Einstein",
    points: 300,
    used: false,
    category: CategoryEnum.CATEGORY_1,
  },
  {
    question: "What is the chemical symbol for water?",
    answer: "H2O",
    points: 400,
    used: false,
    category: CategoryEnum.CATEGORY_1,
  },
  {
    question: "In which country was the game of golf first played?",
    answer: "Scotland",
    points: 500,
    used: false,
    category: CategoryEnum.CATEGORY_1,
  },

  // Add more questions and answers for other categories
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answer: "William Shakespeare",
    points: 100,
    used: false,
    category: CategoryEnum.CATEGORY_2,
  },
  {
    question: "What is the capital of Brazil?",
    answer: "Brasília",
    points: 200,
    used: false,
    category: CategoryEnum.CATEGORY_2,
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    answer: "Mars",
    points: 300,
    used: false,
    category: CategoryEnum.CATEGORY_2,
  },
  {
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci",
    points: 400,
    used: false,
    category: CategoryEnum.CATEGORY_2,
  },
  {
    question: "What is the chemical symbol for gold?",
    answer: "Au",
    points: 500,
    used: false,
    category: CategoryEnum.CATEGORY_2,
  },

  // Add more questions and answers for the remaining categories
  // Questions and answers for Category 3
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue Whale",
    points: 100,
    used: false,
    category: CategoryEnum.CATEGORY_3,
  },
  {
    question:
      "Which famous scientist proposed the theory of general relativity?",
    answer: "Albert Einstein",
    points: 200,
    used: false,
    category: CategoryEnum.CATEGORY_3,
  },
  {
    question: "Which continent is known as the 'Land of Fire and Ice'?",
    answer: "Iceland",
    points: 300,
    used: false,
    category: CategoryEnum.CATEGORY_3,
  },
  {
    question: "What is the symbol for the chemical element potassium?",
    answer: "K",
    points: 400,
    used: false,
    category: CategoryEnum.CATEGORY_3,
  },
  {
    question: "Which famous scientist developed the three laws of motion?",
    answer: "Isaac Newton",
    points: 500,
    used: false,
    category: CategoryEnum.CATEGORY_3,
  },

  // Questions and answers for Category 4
  {
    question: "What is the capital of Australia?",
    answer: "Canberra",
    points: 100,
    used: false,
    category: CategoryEnum.CATEGORY_4,
  },
  {
    question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
    answer: "Venus",
    points: 200,
    used: false,
    category: CategoryEnum.CATEGORY_4,
  },
  {
    question: "Who is the author of the 'Harry Potter' book series?",
    answer: "J.K. Rowling",
    points: 300,
    used: false,
    category: CategoryEnum.CATEGORY_4,
  },
  {
    question: "What is the symbol for the chemical element carbon?",
    answer: "C",
    points: 400,
    used: false,
    category: CategoryEnum.CATEGORY_4,
  },
  {
    question: "Who painted the 'The Starry Night'?",
    answer: "Vincent van Gogh",
    points: 500,
    used: false,
    category: CategoryEnum.CATEGORY_4,
  },

  // Questions and answers for Category 5
  {
    question: "What is the capital of South Africa?",
    answer: "Pretoria",
    points: 100,
    used: false,
    category: CategoryEnum.CATEGORY_5,
  },
  {
    question: "Which planet is known as the 'Giant of the Solar System'?",
    answer: "Jupiter",
    points: 200,
    used: false,
    category: CategoryEnum.CATEGORY_5,
  },
  {
    question: "Who is the author of the 'Pride and Prejudice' novel?",
    answer: "Jane Austen",
    points: 300,
    used: false,
    category: CategoryEnum.CATEGORY_5,
  },
  {
    question: "What is the symbol for the chemical element silver?",
    answer: "Ag",
    points: 400,
    used: false,
    category: CategoryEnum.CATEGORY_5,
  },
  {
    question: "Who painted the 'Mona Lisa'?",
    answer: "Leonardo da Vinci",
    points: 500,
    used: false,
    category: CategoryEnum.CATEGORY_5,
  },
];

const questionsAndAnswersWithIds = questionsAndAnswers.map((qa, index) => ({
    ...qa,
    id: index + 1, // Adding 1 to make the IDs start from 1 (optional)
  }));
  
  export { questionsAndAnswersWithIds };
