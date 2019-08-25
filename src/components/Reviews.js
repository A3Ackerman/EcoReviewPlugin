import React from "react";

class Reviews extends React.Component {
    render() {
        this.props.revdata.map(review => console.log(review.id));
        return this.props.revdata.map(review =>
            (
                <tr key={review.id}>
                    <td>{review.url}</td>
                    <td>{review.brand}</td>
                    <td>{review.prod_name}</td>
                    <td>{review.review_text}</td>
                </tr>
            )
        );
    }
}

export default Reviews