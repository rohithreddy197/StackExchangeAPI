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
    console.log(this.props.data.owner);
    return (
      <div>
        <div style={card}>
          <Link
            to={`/question/${question_id}`}
            style={{ textDecoration: "none" }}>
            <div>{this.props.data.title}</div>{" "}
          </Link>
          <div>
            <span>answer count:{this.props.data.answer_count}</span>
            &emsp;&emsp;
            <span>view count:{this.props.data.view_count}</span>
            &emsp;&emsp;&emsp;
            <Link to={`/user/${this.props.data.owner.user_id}`}>
              <span>user:{this.props.data.owner.display_name}</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Titles;
