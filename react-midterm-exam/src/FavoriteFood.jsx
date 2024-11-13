import React from 'react';
import PropTypes from 'prop-types';

export default function FavoriteFood({ items, title }) {
    if (items.length === 0) {
        return <p>I have no favorite {title}</p>;
    }

    const listItems = items.map(item => (
        <li key={item.id}>
            <strong>{item.name}</strong> - {item.color}, Rating: {item.rating}
        </li>
    ));

    return (
        <div>
            <h3>{title}</h3>
            <ul>{listItems}</ul>
        </div>
    );
}

FavoriteFood.propTypes = {
    items: PropTypes.array,
    title: PropTypes.string
};

FavoriteFood.defaultProps = {
    items: [],
    title: 'Food'
};
