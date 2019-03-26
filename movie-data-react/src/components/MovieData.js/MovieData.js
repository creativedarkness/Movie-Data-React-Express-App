import React, { Component } from 'react';
import Form from '../Form/Form';
import Display from '../Display/Display';
import axios from 'axios';
import './MovieData.css';
import History from '../History/History';

class MovieData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: "",
            poster: "",
            year: null,
            history: []
        }
    }

    searchNotImdb = (movie) => {
        console.log("Current State:", this.state);
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=9681f08f&s=${movie}`)
            .then((omdbResponse) => {
                console.log("omdbapi responded:", omdbResponse);
                let newSearch = omdbResponse.data.Search[0];
                // console.log("newSearch returns:", newSearch);
                axios
                    .post(`http://5c9980014236560014393298.mockapi.io/movies`, { movie: newSearch.Title, poster: newSearch.poster, year: newSearch.Year, history: newSearch })
                    .then((serverResponse) => {
                        console.log("server responded:", serverResponse);
                        this.setState({
                            movie: omdbResponse.data.Search[0].Title,
                            poster: omdbResponse.data.Search[0].Poster,
                            year: omdbResponse.data.Search[0].Year,
                            history: [...this.state.history, newSearch],
                        })
                    })
                // console.log("new state: ", this.state)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    // Add Delete function to remove indiviaul title
    deleteTitle = (id) => {
        console.log(id);
        axios
        .delete(`http://5c9980014236560014393298.mockapi.io/movies/${id}`)
        .then((deleteResponse) => {
            console.log("delete responded:",deleteResponse);
            // console.log("after delete", this.state);
            // this.setState()
        })
    }
    // Add Delete All/Clear History?

    render() {

        // console.log(this.state);
        return (
            <div className="movieData">
                <h1>Movie Data</h1>
                <Form
                    searchFunc={this.searchNotImdb}
                />
                <Display
                    movie={this.state.movie}
                    poster={this.state.poster}
                    year={this.state.year}
                />
                <History
                    history={this.state.history}
                    searchFunc={this.searchNotImdb}
                    deleteTitle={this.deleteTitle}
                />
            </div>
        );
    }
}

export default MovieData;