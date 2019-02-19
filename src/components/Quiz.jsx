import React, { Component } from 'react';
import axios from 'axios';

export class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      quiz: [
        {category: 'loading'}
      ]
    }
    this.get_quiz = this.get_quiz.bind(this)
  }

  async componentWillMount() {
    const response = await this.get_quiz()
    debugger;
    this.setState({
      quiz: response.data.data.results
    })
  }

  async get_quiz() {
    const url = 'https://quiz-me-api.herokuapp.com/api/quiz'
    return await axios.get(url)
  }

  render() {
    return (
      <div>
        {this.state.quiz[0].category}
      </div>
    )
  }
}

export default Quiz
