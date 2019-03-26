import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: "",
        }
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.searchFunc(this.state.movie);
        this.setState({movie: ""})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="movie" onChange={this.handleChange} />
                <input type="submit" />
            </form>
        );
    }
}

export default Form;