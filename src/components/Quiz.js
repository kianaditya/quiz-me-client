import React, { Component } from 'react'
import axios from 'axios'
import QuestionCard from './QuestionCard'
import ReactCountdownClock from 'react-countdown-clock'

class Quiz extends Component {
    state = {
      quiz: [
        { 
          question: '',
          category: '',
          correct_answer: '',
          incorrect_answers: ['']
      }
      ],
      displayQuiz: true,
      finalScore: 0
    }

  componentWillMount = async () => {
    let questions = []
    const response = await this.getQuiz()
    response.data.data.results.forEach(question => {
      questions.push(question)
    })
    this.setState({
      quiz: questions
    })
  }

  calculateScore = (event) => {
    let finalScore = this.state.finalScore;
    finalScore = (event.target.name === event.target.id) ? finalScore + 1 : finalScore + 0
    this.setState({
      finalScore: finalScore
    })
  }

  getQuiz = async () => {
    const url = 'https://quiz-me-api.herokuapp.com/api/quiz'
    return await axios.get(url)
  }

  render () {
    let quiz = this.state.quiz
    let questionList = quiz.map(question => { 
      return <QuestionCard question={question} id={quiz.indexOf(question) + 1} calculateScore={this.calculateScore} />
    })

    return (
      <div className='container'>
        {this.state.displayQuiz ?  
          <div>
            <ReactCountdownClock 
            seconds={10}
            color="blue"
            alpha={0.9}
            size={100}
            onComplete={() => this.setState({displayQuiz: false})} 
            />
            {questionList}
          </div> 
          :
          <div className='d-flex justify-content-center'>
            <h1 className='border rounded-pill bg-info m-4 p-4 text-center text-white w-50'>
              Time is up! Your score is {this.state.finalScore}
            </h1>          
          </div> 
          }
        </div> 
    )
  }
}

export default Quiz;
