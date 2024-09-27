import React, { useState } from 'react';

const sartreQuotes = [
    "Existence precedes essence.",
    "Hell is other people.",
    "Freedom is what you do with what's been done to you.",
    "Life has no meaning the moment you lose the illusion of being eternal.",
    "We are our choices."
];

const heideggerQuotes = [
    "To dwell is to garden the earth.",
    "Every man is born as many men and dies as a single one.",
    "We do not say that time is, but that it temporalizes itself.",
    "Being is the most self-evident and yet the most obscure concept.", 
    "The most thought-provoking thing in our thought-provoking time is that we are still not thinking.",
];

export default function QuoteGenerator() {
    const [sartreQuote, setSartreQuote] = useState("");
    const [heideggerQuote, setHeideggerQuote] = useState("");
    const [remainingQuotes, setRemainingQuotes] = useState([...sartreQuotes, ...heideggerQuotes]);
    const [randomQuote, setRandomQuote] = useState("");

    const handleSartreClick = () => {
        const nextIndex = (sartreQuotes.indexOf(sartreQuote) + 1) % sartreQuotes.length;
        setSartreQuote(sartreQuotes[nextIndex]);
    };

    const handleHeideggerClick = () => {
        const nextIndex = (heideggerQuotes.indexOf(heideggerQuote) + 1) % heideggerQuotes.length;
        setHeideggerQuote(heideggerQuotes[nextIndex]);
    };

    const handleRandomQuoteClick = () => {
        if (remainingQuotes.length === 0) {
            resetQuotes();
            return;
        }
        const randomIndex = Math.floor(Math.random() * remainingQuotes.length);
        const newQuote = remainingQuotes[randomIndex];
        setRandomQuote(newQuote);
        setRemainingQuotes(remainingQuotes.filter((_, index) => index !== randomIndex));
    };

    const resetQuotes = () => {
        setRemainingQuotes([...sartreQuotes, ...heideggerQuotes]);
        setRandomQuote("");
    };

    return (
        <div className="quote-generator-container">
            <h1>Jean-Paul Sartre</h1>
            <h2>Quote: <br /><span>{sartreQuote}</span></h2>
            <button onClick={handleSartreClick}>Get Sartre Quote</button>
            <h2>--------------------------------------------------------------------</h2>
            <h1>Martin Heidegger</h1>
            <h2>Quote: <br /><span>{heideggerQuote}</span></h2>
            <button onClick={handleHeideggerClick}>Get Heidegger Quote</button>
            <h2>--------------------------------------------------------------------</h2>
            <h2>Random Quote from both philosophers: <br /><span>{randomQuote}</span></h2>
            <button onClick={handleRandomQuoteClick}>Get Random Quote</button>
        </div>
    );
}
