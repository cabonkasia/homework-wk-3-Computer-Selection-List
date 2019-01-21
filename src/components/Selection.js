import React from 'react';


export default class Selection extends React.Component {
  render() {
    return (
      <ol>
        {this.props.modelName.map((name, index) => <li key={index}>{name}</li>)}
      </ol>
    )
  }
}

