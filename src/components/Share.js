import React, { Component } from 'react';
import { InputGroup, Button, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import classNames from 'classnames';
import '../App.css';
import axios from 'axios';

class Share extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            disabledButton: true,
            checkURL: false
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.changeStateOfURL = this.changeStateOfURL.bind(this);
    }

    checkReg = (string) => {
        let reg = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w]+\?v=|embed\/|v\/)?)([\w]+)(\S+)?$/;
        let pattern = new RegExp(reg);
        return pattern.test(string);
    }

    changeStateOfURL = () => {
        this.setState({
            checkURL: this.checkReg(this.state.inputValue)
        })
    }

    handleChange(e) {
        let input = e.target.value;
        let checkURL = this.checkReg(input);
        if(input === "") {
            this.setState({
                disabledButton: true,
                checkURL: false
            });
        } else {
            if(checkURL) {
                this.setState({
                    disabledButton: false,
                    checkURL: false,
                    inputValue: input
                });
            } else {
                this.setState({
                    disabledButton: true,
                    checkURL: true
                });
            }
        }
    }

    handleClick(e) {
        e.preventDefault();
        const url = 'https://funnymovie-remi.herokuapp.com/api/movie';
        const reqBody = {
            title: null,
            url: this.state.inputValue,
            sharedBy: "admin@localhost",
            description: null,
            voteUp: 0,
            voteDown: 0
        }
        axios.post(url, reqBody)
            .then(res => {
                return <Redirect to="/" />
            })
    }

    clearInput = () => {
        document.getElementById('inputValue').value = "";
        this.setState({
            inputValue: "",
            disabledButton: true,
            checkURL: false
        });
    }

    render() {
        let btnDisable = this.state.disabledButton;
        let cUrl = this.state.checkURL;
        return (
            <div className="input-group">
                <InputGroup>
                    <Input 
                        placeholder="Youtube link"
                        onChange={this.handleChange}
                        id="inputValue" />
                    <Button 
                        disabled={btnDisable}
                        color="primary"
                        onClick={this.handleClick}>Share</Button>
                </InputGroup>
                <p id="show" className={classNames({'hidden': !cUrl})}>Your url is not valid</p>
            </div>
        )
    }
}

export default Share;