import React from 'react';
import './App.css';
import Header from './components/Header';
import Reviews from './components/Reviews';
import SubmissionForm from './components/SubmissionForm';

class EcoReviewApp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            reviews: [{id: 1, url: "xyz.com", brand: "ABC", prod: "CDE", text: "!!!!!"},
                {id: 2, url: "123.com", brand: "4adf45", prod: "asdf", text: "op qrst uvwz yzhigh lmnop qrst uvwz yzdf"}],
            submission: ""
        }
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
                <SubmissionForm/>
            </div>
        );
    }
}

export default EcoReviewApp