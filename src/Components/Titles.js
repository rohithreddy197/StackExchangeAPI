import React, { Component } from "react";

class Titles extends Component {
  render() {
    return (
      <div>
        <div>{this.props.data.title}</div>
      </div>
    );
  }
}

export default Titles;
