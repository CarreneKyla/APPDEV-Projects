import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import ListOfFruits from './ListOfFruits'

function App() {
  //array of fruits => fruits.object
  const fruits = [
    {id: 1, name: "apple", color: "red"},//apple object
    {id: 2, name: "banana", color: "yellow"},//banana object
    {id: 3, name: "orange", color: "orange"},//orange object
    {id: 4, name: "grape", color: "purple"},//grape object
    {id: 5, name: "kiwi", color: "green"}  //kiwi object
  ]
  //dessert objects
  const desserts = [
    {id: 1, name: "cake", color: "red"},//cake object
    {id: 2, name: "ice cream", color: "blue"},//ice cream object
    {id: 3, name: "pie", color: "green"},//pie object
  
  ]
  return (
    <>
    {/* {fruits.length > 0 && (<ListOfFruits items ={fruits} category = "My Favorite Fruits "/>)*/}
    <Header />
    {fruits.length > 0 ? (<ListOfFruits items ={fruits} category = "My Favorite Fruits "/>) : (<p>No fruits</p>)}
    {desserts.length > 0 ? (<ListOfFruits items ={desserts} category = "My Favorite Desserts "/>) : (<p>I do not like dessert.</p>)}
    <Footer />
    </>
  )
}

export default App
