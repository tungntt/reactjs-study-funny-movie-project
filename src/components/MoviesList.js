import React, { Component } from 'react'

export default class MoviesList extends Component {
    render() {
        let { movies } = this.props;
        return (
            <div>
                <iframe src={movies.url} width="200px" height="100px" title={movies.title} ></iframe>
                <p>Shared by: {movies.sharedBy}</p>
                <p>Description: {movies.description}</p>
            </div>
        )
    }
}