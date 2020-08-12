import React, { Component } from 'react';

class HotelConatainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotels: []
        }
    }

    componentDidMount() {
        const { city } = qs.parse(this.props.location.search.replace('?', ''));
        const url = "http://localhost:3001/api/hotels/city/" + this.props.city
        
    }

    render(){
        return(
            <div>
                HotelConatainer
            </div>
        );
    }
}

export default HotelConatainer;