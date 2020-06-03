import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <>
                <form>
                    <div className="firstName">
                        <label>
                            First Name
                            <input type="text" name="name" />
                        </label>
                    </div>

                    <div className="lastName">
                        <label>
                            Last Name
                            <input type="text" name="name" />
                        </label>
                    </div>

                    <div className="editBtn">
                        <button onClick="">Edit</button>

                    </div>
                </form>
            </>
        );
    }
}

export default Form;