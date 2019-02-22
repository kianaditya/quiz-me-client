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
          incorrect_answers: [''],
          displayQuiz: true
      }
      ]
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

  getQuiz = async () => {
    const url = 'https://quiz-me-api.herokuapp.com/api/quiz'
    return await axios.get(url)
  }

  render () {
    let quiz = this.state.quiz
    let questionList = quiz.map(question => { 
      return <QuestionCard question={question} id={quiz.indexOf(question) + 1} />
    })

    return (
      <div className='container'>
      <div>
      <ReactCountdownClock seconds={60}
                      color="blue"
                      alpha={0.9}
                      size={100}
                      onComplete={() => this.setState({displayQuiz: false})} />
      </div>
            {questionList}
      </div>
    )
  }
}

export default Quiz
