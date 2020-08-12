import React, { Component } from 'react';
import qs from 'qs';

import Hotel from '../components/hotel/Hotel';
import Api from '../utils/Api';

class HotelsConatainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotels: []
        }
    }

    componentDidMount() {
        const { city } = qs.parse(this.props.location.search.replace('?', ''));
        if (city) {
            Api.getCityHotels(city)
                .then(data => {
                    // console.log('HotelsContainer#componentDidMount Api.getCityHotels() data', data);
                    this.setState({
                        hotels: data.results
                    })
                })                                                         
        }
        
    }

    render(){
        const { hotels } = this.state;
        return(
            <>
                <Hotel hotels={hotels} />
            </>
        );
    }
}

export default HotelsConatainer;