import React, { Component } from "react";
import axios from "axios";
import CurrentActionBar from "./CurrentActionBar";
const titleStyle = {
  fontSize: "180%",
  textAlign: "center"
};
const cardTitle = {
  width: "90%",
  height: "100px",
  backgroundColor: "#eee",
  boxShadow: "6px 6px #f2f5f3",
  margin: "auto",
  verticalAlign: "middle"
};
class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: [],
      answers: [],
      question_id: props.match.params.question_id
    };
  }
  componentDidMount() {
    const questionAnsURL =
      "https://api.stackexchange.com/2.2/questions/20721777/answers?order=desc&sort=activity&site=stackoverflow";
    const questionURL =
      "https://api.stackexchange.com/2.2/questions/20721777?order=desc&sort=activity&site=stackoverflow";

    axios
      .get(`${questionURL}`)
      .then(res => this.setState({ question: res.data.items[0] }))
      .then(
        axios
          .get(`${questionAnsURL}`)
          .then(res => this.setState({ answers: res.data.items }))
      );
  }
  render() {
    console.log(this.state.question.is_answered);
    return (
      <div>
        <div>
          <CurrentActionBar currentAction="Question Title" />
        </div>
        <div style={cardTitle}>
          <p style={titleStyle}>{this.state.question.title}</p>
          <span>
            {/* Is Answered {this.state.question.is_answered ? "yes" : "No"} */}
          </span>
        </div>
      </div>
    );
  }
}

export default Question;
