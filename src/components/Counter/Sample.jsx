import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Simran" };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNameChange2 = this.handleNameChange2.bind(this);
    this.handleInputName = this.handleInputName.bind(this);
  }

  handleNameChange() {
    this.setState({
      name: "Amjad Khan",
    });
  }
  handleNameChange2() {
    this.setState({
      name: "Mirza Irshad Baig",
    });
  }
  handleInputName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  componentDidMount() {
    this.setState({
      name: "Mudassir Khan",
    });
  }
  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <Button
          onClick={() => {
            this.handleNameChange();
          }}
        >
          Change Name
        </Button>
        <br />
        <br />
        <Button
          onClick={() => {
            this.handleNameChange2();
          }}
        >
          Prev Name
        </Button>
        {/* <Form.Control onChange={(e) => handleInputName(e)}></Form.Control> */}
      </div>
    );
  }
}

export default Sample;
