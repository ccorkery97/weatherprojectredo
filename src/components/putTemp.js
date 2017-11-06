import React, { Component } from 'react';
import getTemp from './getTemp';


class putTemp extends Component {
  render() {
    return (
      <div>
        <h2>{temp} F </h2>
      </div>
    );
  }
}

export default putTemp;