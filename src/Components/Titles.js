import React, { Component } from "react";
import { Link } from "react-router-dom";
const card = {
  height: "80",
  width: "80%",
  boxShadow: "5px 5px #bbb",
  border: "1px solid",
  padding: "10px",
  margin: "20px 0px",
  marginLeft: "120px",
  color: "black",
  cursor: "pointer"
};
class Titles extends Component {
  render() {
    const question_id = this.props.data.question_id;
    return (
      <div>
        <Link
          to={`/question/${question_id}`}
          style={{ textDecoration: "none" }}>
          <div style={card}>
            <div>{this.props.data.title}</div>
            <div>
              <span>answer count:{this.props.data.answer_count}</span>
              &emsp;&emsp;
              <span>view count:{this.props.data.view_count}</span>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Titles;
