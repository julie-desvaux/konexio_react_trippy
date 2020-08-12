import React, { Component } from 'react';
import styled from 'styled-components';

import Global from '../../Global';
import Card from './Card';


const Container = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
    color: ${Global.color.body};
    font-family: ${Global.font.primary};
`;

class Gallery extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { cities }    = this.props;
        const isLargeTrue   = true;
        const isLargeFalse  = false;
        console.log('cities', cities[0])
        return(
            <Container className="row mt-5">
                <div className="col-md-12 mt-5">
                    <h1>Explorez le monde</h1>
                    <div>
                        {cities[0] === undefined ? '' :(
                            <Card 
                            name={cities[0].name}
                            slug={cities[0].slug}
                            source={cities[0].source}
                            isLarge={isLargeTrue} />
                        )}
                        
                    </div>
                    <div>
                        {cities.slice(1).map((city, index) => {
                            return(
                                <Card 
                                    key={index}
                                    name = {city.name}
                                    slug = {city.slug}
                                    source = {city.source}
                                    isLarge = {isLargeFalse}
                                />
                            );
                        })}
                    </div>
                </div>
            </Container>
        );
    }
}

export default Gallery;