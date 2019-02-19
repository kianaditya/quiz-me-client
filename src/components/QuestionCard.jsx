import React from 'react'

function QuestionCard(props) {

    let answer = props.question.incorrect_answers.map(answer => 
        <p>{answer}</p>
    )
    let random =Math.floor(Math.random() * (3));
    answer.splice(random,0,props.question.correct_answer)
  return (
    <div>
        <h1>{props.question.category}</h1>
        <p>{props.question.question}</p>
            {answer}
    </div>
  )
}

export default QuestionCard
