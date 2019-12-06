import React, { Component } from 'react'

const axios = require('axios').default;

export default class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesInfomation: []
        };
    }

    componentDidMount() {
        const url = 'https://funnymovie-remi.herokuapp.com/api/movie';
        axios.get(url)
            .then( response => {
                this.setState({
                    moviesInfomation: response.data
                });
            });
    }

    render() {
        let movies = this.state.moviesInfomation;
        return (
            <div>
                <h2>Movies List</h2>
                {
                    movies.map( (movie, index) => (
                        <div key={index}>
                            <iframe src={movie.url} width="200px" height="100px" title={movie.title} ></iframe>
                            <p>Shared by: {movie.sharedBy}</p>
                            <p>Description: {movie.description}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}