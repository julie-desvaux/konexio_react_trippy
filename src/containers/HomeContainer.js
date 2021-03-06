import React, { Component } from 'react';

import Api from '../utils/Api';
// import Home from '../components/core/Home';
import Gallery from '../components/city/Gallery';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
        }
    }

    componentDidMount() {
        Api.getHome()
            .then(cities => {
                // console.log('HomeContainer#componentDidMount Api.gethome() cities', cities);
                this.setState({
                    cities
                })
            })
    }

    render(){
        const { cities } = this.state;
        console.log('HomeContainer#render cities', cities);
        return(
            <>
                <Gallery cities={cities}/>
            </>
        );
    }
}

export default HomeContainer;