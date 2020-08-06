import React, { Component } from 'react';

import Card from '../city/Card';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { cities } = this.props;
        if (cities.length > 0) {
            return(
                <div>
                    <Card 
                        name={cities[0].name}
                        slug={cities[0].slug}
                        source={cities[0].source}
                    />
                </div>
            );
        }
        return (
            <>
            </>
        );   
    }
}

export default Home;