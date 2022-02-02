export const normalizeData = (form) => {
  const formData = JSON.parse(JSON.stringify(form));
  const data = {};
  data.firstQuestion = formData.questions[0].id;
  data.questions = {};
  data.answers = {};
  formData.questions.forEach((question) => {
    question.answers = question.answers.map((answer) => {
      data.answers[answer.id] = answer;
      return answer.id;
    });

    data.questions[question.id] = question;
  });

  data.outcomes = {};
  formData.outcomes.forEach((outcome) => {
    data.outcomes[outcome.id] = outcome;
  });

  return data;
};
