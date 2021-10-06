import React, { Component } from "react";

class CatList extends Component {
  render() {
    const cats = () => this.props.breeds.map((cat) => <li>{cat}</li>);
    return (
      <div>
        <ul>{cats}</ul>
      </div>
    );
  }
}
export default CatList;
