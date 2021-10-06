import React, { Component } from "react";

class CatList extends Component {
  render() {
    const cats = () => this.props.cats.map((cat, index) => <li key={cat}>{cat}</li>);
    return (
      <div>
        <ul>{cats()}</ul>
      </div>
    );
  }
}
export default CatList;
