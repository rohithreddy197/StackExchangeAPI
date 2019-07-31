import React, { Component } from "react";
import axios from "axios";
const baseURL = "https://api.stackexchange.com/2.2/users";
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: props.match.params.user_id,
      userData: [],
      UserQues: []
    };
  }
  componentDidMount() {
    const userURL = `${baseURL}/${this.state.user_id}`;
    const userDataURL =
      userURL + "?order=desc&sort=reputation&site=stackoverflow";
    const userQuesURL =
      userURL + "/questions?order=desc&sort=activity&site=stackoverflow";
    axios
      .get(userDataURL)
      .then(res => this.setState({ userData: res.data.items[0] }))
      .then(
        axios
          .get(userQuesURL)
          .then(res => this.setState({ userQuesURL: res.data.items }))
      );
  }
  render() {
    console.log(this.state);
    return <div>{null}</div>;
  }
}

export default User;
