import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { addModel } from './actions/addModel'
import Selection from './components/Selection'



class App extends Component {

  state = {
    data: {
      "Ivel Z3": {
        manufacturer: "Ivasim",
        year: 1969,
        origin: "Croatia"
      },
      "Bally Astrocade": {
        manufacturer: "Bally Consumer Products",
        year: 1977,
        origin: "USA"
      },
      "Sord M200 Smart Home Computer": {
        manufacturer: "Sord Computer Corporation",
        year: 1971,
        origin: "Japan"
      },
      "Commodore 64": {
        manufacturer: "Commodore",
        year: 1982,
        origin: "USA"
      }
    }
  }

  updateSelection = (event) => {
    this.setState({ value: event.target.value })
  }

  addModelHandler = () => {
    this.props.addModel(this.state.value)
  }

  render() {
    return (
      <main>
        <Selection modelName={this.props.model} />
        <div className="App">
          <select onChange={this.updateSelection} value={this.state.value}>
            <option>-- pick a model --</option>
            {Object.keys(this.state.data).map((model, index) => <option key={index} value={model}>{model} ({this.state.data[model].year})</option>)}
          </select>
          <button onClick={this.addModelHandler}>ADD</button>
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    model: state.model
  }
}


export default connect(mapStateToProps, { addModel })(App);


