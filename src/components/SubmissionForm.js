import React from "react";

class SubmissionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: '',
            prod_name:'',
            review_text:'',
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    handleSubmit(event) {
        this.setState({submitted: true});
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="App-SubmissionForm">
                <form onSubmit={this.handleSubmit}>
                    <p>
                        {this.state.submitted ? "Thanks for submitting a review!" : "Submit your own eco-review of this product below."}
                    </p>
                    <div>
                        <label>Brand: <input name="brand" value={this.state.brand} onChange={this.handleChange}/> </label>
                    </div>
                    <div><label>Product Name: <input name="prod_name" value={this.state.prod_name} onChange={this.handleChange}/> </label></div>
                    <div><label>Review Text: <input name="review_text" value={this.state.review_text} onChange={this.handleChange}/> </label></div>
                    <div>
                        <button onSubmit={this.handleChange}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}


export default SubmissionForm