import React, { Component } from 'react'
import axios from 'axios'
import MoviesList from './MoviesList'

export default class MoviesContainer extends Component {
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
        console.log(this.state.moviesInfomation[0]);
        return (
            <div>
                {
                    this.state.moviesInfomation.map((item, index) => (
                        <MoviesList 
                            key={index}
                            movies={item} />
                    ))
                }
            </div>
        )
    }
}
