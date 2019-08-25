import React from 'react';
import './App.css';
import Header from './components/Header';
import Reviews from './components/Reviews';
import SubmissionForm from './components/SubmissionForm';

let server = "http://127.0.0.1:4433";
/*global chrome*/

class EcoReviewApp extends React.Component {

    state = {reviews: [], url: ""};

    componentDidMount() {

        chrome.runtime.sendMessage({data:"Handshake"},{});

        chrome.runtime.onMessage.addListener(message => {
            this.setState({url: message.data});
            console.log("Url is now: "+ this.state.url);
        });

        fetch(server + "/reviews", {
            method: 'GET'
        })
            .then(res => res.json())
            .then(json => this.setState({reviews: json}));
    }

    render(){
        return (
            <div className="App">
                <Header/>
                <table className = "App-ReviewBox" border="1">
                    <tbody>
                    <Reviews revdata={this.state.reviews}/>
                    </tbody>
                </table>
                <SubmissionForm server={server} url={this.state.url}/>
            </div>
        );
    }
}


export default EcoReviewApp