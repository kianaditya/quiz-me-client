import React from 'react'

const QuestionCard = (props) => {
    let allanswers = props.question.incorrect_answers
    let random = Math.floor(Math.random() * (3));
    allanswers.splice(random,0,props.question.correct_answer)
    let answers = allanswers.map(answer => 
        <button style={{width: '33%'}} className='btn btn-info p-2 m-2'>{answer}</button>
    )
  return (
    <div id={props.id} className='border rounded bg-light m-4 container'>
    <div className='row'>
      <div className='col'>
        <h4 className='m-2'>Question {props.id}: </h4>
        <h4 className='m-2'>{props.question.question}</h4>
        <h6 className='m-2'>Category: {props.question.category}</h6>
      </div>
        <div className='col'>
              {answers}
        </div>
    </div>
    </div>
  )
}

export default QuestionCard
