import React, { Component } from 'react';

class ClickablePicture extends Component {
  state = {
    clicked: false,
  };

  changedPicture = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div>
        <img
          onClick={this.changedPicture}
          src={this.state.clicked ? this.props.imgClicked : this.props.img}
          alt={
            this.state.clicked ? 'face wearing glasses' : 'face without glasses'
          }
        ></img>
      </div>
    );
  }
}

export default ClickablePicture;
