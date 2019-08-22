import React from "react";

class Reviews extends React.Component {
    render() {
        return this.props.revdata.map(review => (
            <tr key={review.id}>
                    <td>{review.url}</td>
                    <td>{review.brand}</td>
                    <td>{review.prod}</td>
                    <td>{review.text}</td>
            </tr>
        ));
    }
}

export default Reviews