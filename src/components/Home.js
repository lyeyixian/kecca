import React, { Component } from 'react';
import fire from '../config/Fire';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <button onClick={() => fire.auth().signOut()} >Sign Out</button>
            </div>
        )
    }
}

export default Home;