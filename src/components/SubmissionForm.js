import React from "react";

class SubmissionForm extends React.Component {

    state = {
        url: '',
        brand: '',
        prod_name:'',
        review_text:'',
        submitted: false
    };

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({url: nextProps.url});
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.brand === '' ||this.state.prod_name === '' ||this.state.review_text === '' || this.state.submitted){
            console.log("missing info or already submitted");
            return
        }
        console.log("submitting...");
        fetch(this.props.server+"/reviews", {
            method: 'POST',
            body: JSON.stringify(this.state),
            mode: "no-cors"})
            .then(() => this.setState({submitted: true}))
            .catch(err => console.log("catching an error: ", err));
    }

    render() {
        return (
            <div className="App-SubmissionForm" >
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <p>
                        {this.state.submitted ? "Thanks for submitting a review!" : "Submit your own eco-review of this product below."}
                    </p>
                    <div><label>Brand: <input name="brand" value={this.state.brand} onChange={this.handleChange.bind(this)}/> </label></div>
                    <div><label>Product Name: <input name="prod_name" value={this.state.prod_name} onChange={this.handleChange.bind(this)}/> </label></div>
                    <div><label>Review Text: <input name="review_text" value={this.state.review_text} onChange={this.handleChange.bind(this)}/> </label></div>
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