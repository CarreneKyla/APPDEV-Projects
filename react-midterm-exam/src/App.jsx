import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header';
import Footer from './Footer';
import Identification from './Identification';
import FavoriteFood from './FavoriteFood';
import Counter from './Counter';
import Function from './Function';
import Paragraph from './Paragraph';
import MyCart from './MyCart';

const fruits = [
    { id: 1, name: 'Apple', color: 'Red', rating: 4 },
    { id: 2, name: 'Banana', color: 'Yellow', rating: 5 },
    { id: 3, name: 'Grapes', color: 'Green', rating: 3 },
    { id: 4, name: 'Orange', color: 'Orange', rating: 4 },
    { id: 5, name: 'Mango', color: 'Yellow', rating: 5 },
];

const porkDishes = [];

export default function App() {
    return (
        <>
            <Header />
            <Identification />
            <FavoriteFood items={fruits} title="Favorite Fruits" />
            <FavoriteFood items={porkDishes} title="Favorite Pork Dishes" />
            <Counter />
            <Function />
            <Paragraph />
            <MyCart />
            <Footer />
        </>
    );
}

