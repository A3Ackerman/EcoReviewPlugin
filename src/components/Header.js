import logo from '../OpenSourceLeaf.png';
import React from "react";

class Header extends React.Component {

    render(){
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h3>
                    EcoReview Online Shopping Assistant
                </h3>
            </header>
        )
    }
}

export default Header