export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD='hard'
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
  const endpoints = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
  const data = await (await fetch(endpoints)).json()
  console.log(data)
}


// https://opentdb.com/api.php?amount=10&type=multiple