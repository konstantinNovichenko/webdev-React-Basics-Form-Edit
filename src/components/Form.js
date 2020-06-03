import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Temur",
      lastName: "Sabirov",
    };
  }

  handleEdit() {}
  render() {
    return (
      <>
        <form>
          <div className="firstName">
            <label>
              First Name
              <input
                type="text"
                name="name"
                value={this.state.firstName}
                onChange={(event) =>
                  this.setState({ firstName: event.target.value })
                }
              />
            </label>
            {this.state.firstName}
          </div>

          <div className="lastName">
            <label>
              Last Name
              <input
                type="text"
                name="name"
                value={this.state.lastName}
                onChange={(event) =>
                  this.setState({ lastName: event.target.value })
                }
              />
            </label>
          </div>

          <div className="editBtn">
            <button onClick="handleEdit()">Edit</button>
          </div>
        </form>
      </>
    );
  }
}

export default Form;
