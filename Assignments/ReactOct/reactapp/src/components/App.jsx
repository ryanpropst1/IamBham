import React from "react";
import Spinner from "react-bootstrap/Spinner";

// function App(props) {
//   return <h1>{props.hello}</h1>;
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", placeholder: "input", hasLoaded: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ text: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ hasLoaded: true });
  }
  render() {
    if (this.state.hasLoaded) {
      return (
        <React.Fragment>
          <h1>
            {this.props.hello} {this.state.text}
          </h1>
          <form>
            <input
              type="text"
              name={this.state.placeholder}
              onChange={this.handleChange}
            ></input>
          </form>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
          <Spinner animation="border" />
          <button onClick={this.handleSubmit}>Load</button>
        </React.Fragment>
      );
    }
  }
}

export default App;
