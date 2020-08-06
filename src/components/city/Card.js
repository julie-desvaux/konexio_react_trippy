import React, { Component } from 'react';
import styled from 'styled-components';
import {
    Link
  } from 'react-router-dom';

import Config from '../../Config';

const Container = styled.div`

`;

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, source, slug, isLarge } = this.props
        const src = Config.host + source
        let classContainer = ''
        if (isLarge) {
            classContainer = "col-12 col-md-6"
        } else {
            classContainer = "col-6 col-md-3"
        }
        return(
            <Container className={classContainer}>
                <Link to={`/hotels?city=${slug}`}>
                    <div>
                        <img src={src} alt={slug}/>
                        <p>{name}</p>
                    </div>
                </Link>
            </Container>
        )
    }

}

Card.defaultProps = {
    name: '',
    source: 'http://via.placeholder.com/300x200',
    slug: '',
    isLage: false,
};

export default Card;