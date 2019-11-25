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
        const url = 'https://funnymovie-remi.herokuapp.com/api/movie?fbclid=IwAR3wwt0wdRvfGg7dFvBBzxkjcb7U5hMn_UEw6t97jA6Ou4_lakjkZ-7-pJc';
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
