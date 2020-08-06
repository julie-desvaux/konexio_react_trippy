import React, { Component } from 'react';

import Config from '../../Config';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, source, slug } = this.props
        const src = Config.host + source
        return(
            <>
                <img src={src} alt={slug} />
                <p>{name}</p>
            </>
        )
    }

}

Card.defaultProps = {
    name: '',
    source: 'http://via.placeholder.com/300x200',
    slug: ''
};

export default Card;