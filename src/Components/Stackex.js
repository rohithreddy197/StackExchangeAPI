import React, { Component } from "react";
import axios from "axios";
import Titles from "./Titles";
const stackexURl =
  "https://api.stackexchange.com/questions?pagesize=10&site=stackoverflow";
class Stackex extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axios
      .get(`${stackexURl}`)
      .then(res => this.setState({ data: res.data.items }));
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        {this.state.data.map(a => (
          <Titles key={a.question_id} data={a} />
        ))}
      </div>
    );
  }
}
export default Stackex;
