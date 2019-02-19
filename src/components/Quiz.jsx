import React, { Component } from 'react'
import axios from 'axios'
import QuestionCard from './QuestionCard'

export class Quiz extends Component {
  constructor () {
    super()
    this.state = {
      quiz: [
        { 
          question: '',
          category: '',
          correct_answer: '',
          incorrect_answers: ['']
      }
      ]
    }
    this.get_quiz = this.get_quiz.bind(this)
  }

  async componentWillMount () {
    let questions = []
    const response = await this.get_quiz()
    response.data.data.results.forEach(question => {
      questions.push(question)
    })
    this.setState({
      quiz: questions
    })
  }

  async get_quiz () {
    const url = 'https://quiz-me-api.herokuapp.com/api/quiz'
    return await axios.get(url)
  }

  render () {
    let questionList = this.state.quiz.map(question => {
      return <QuestionCard question={question} />
    })

    return (<div>{questionList}</div>)
  }
}

export default Quiz
