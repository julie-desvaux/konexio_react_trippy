import React, { Component } from 'react';

import Card from '../city/Card';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { cities } = this.props;
        const isLargeTrue   = true;
        const isLargeFalse  = false;
        if (cities.length > 0) {
            return(
                <div>
                    <Card 
                        name={cities[0].name}
                        slug={cities[0].slug}
                        source={cities[0].source}
                        isLarge={isLargeTrue}
                    />
                    <Card 
                        name={cities[1].name}
                        slug={cities[1].slug}
                        source={cities[1].source}
                        isLarge={isLargeFalse}
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