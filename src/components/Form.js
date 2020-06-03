import React, { Component } from "react";
import './style.css';

export class FormEdit extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "Temur",
      lastName: "Sabirov",
      previous_firstName: "",
      previous_lastName: "",
      editing: false,
    };

    //this.previousState = this.state;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return !this.state.editing ? (
    <div className="container">
      <form>
        <div className="firstname">First name: {this.state.firstName}</div>
        <div className="lastname">Last name: {this.state.lastName}</div>
        <button className="myButton"
          onClick={() => {
            this.setState({ editing: true });
          }}
        >
          editing
        </button>
      </form>
    </div>
    ) : (
    <div className="container">
      <form>
        <div className="firstname">First name:</div>
        <input
          className="initFirst"
          type="text"
          name="first"
          onChange={(event) => this.setState({ firstName: event.target.value })}
          placeholder={this.state.firstName}
        />
        <div className="lastname">Last name:</div>
        <input
          className="initLast"
          type="text"
          name="last"
          onChange={(event) => this.setState({ lastName: event.target.value })}
          placeholder={this.state.lastName}
        />
        <br></br>
        <button
          className="save"
          onClick={() => {
            this.setState({ editing: false, previous_firstName: this.state.firstName, previous_lastName: this.state.lastName });
          }}
        >
          Save
        </button>
        <button
          className="cancel"
          onClick={() => {
            this.setState({ firstName: this.state.previous_firstName, lastName: this.state.previous_lastName, editing: false });
          }}
        >
          Cancel
        </button>
      </form>
    </div>
    );
  }
}

export default FormEdit;
