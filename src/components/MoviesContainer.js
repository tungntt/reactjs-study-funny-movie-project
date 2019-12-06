import React, { Component } from 'react';
import MoviesList from './MoviesList';
import Header from './Header';
import Share from './Share';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

export default class MoviesContainer extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        {/* <Route path="/">
                            <MoviesList />
                        </Route>
                        <Route exact path="/share">
                            <Share />
                        </Route> */}
                    <Route path="/" exact component={MoviesList} />
                    <Route path="/share" component={Share} />
                    </Switch>
                </div>
            </Router>
        )
    }
}