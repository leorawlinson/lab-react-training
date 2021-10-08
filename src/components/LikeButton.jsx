import React, { Component } from 'react';

class Likebutton extends Component {
  state = {
    number: 0,
  };

  changeNumber = () => {
    console.log('Clicking');
    this.setState({ number: this.state.number + 1 });
  };

  render() {
    const { number } = this.state;
    return (
      <div>
        <button onClick={this.changeNumber}>{number}Likes </button>
      </div>
    );
  }
}

export default Likebutton;
